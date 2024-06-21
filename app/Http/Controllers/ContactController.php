<?php

namespace App\Http\Controllers;

use App\Http\Requests\Contact\StoreRquest;
use App\Http\Requests\Contact\UpdateRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Laravel\Facades\Image;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::where('user_id', Auth::user()->id)->get();
        //dd($contacts);
        return Inertia::render('Contact/index', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRquest $request)
    {
        $data =$request->only('name','email','phone','description', 'visibility');
        if($request->hasFile('avatar')){
            $file=$request->file('avatar');
            $routeImage = $file->store('avatars', ['disk' => 'public']);
            $data['avatar'] = $routeImage;
        }
        $data['user_id'] = Auth::user()->id;
        //dd($data);
        Contact::create($data);
        //$contact = Contact::create($data);
        return redirect()->route('contact.index');  

    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //dd($contact);
        return Inertia::render('Contact/edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Contact $contact)
    {
        $data = $request->only('name', 'email', 'phone', 'description', 'visibility');
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $routeImage = $file->store('avatars', ['disk' => 'public']);
            
            // Load the image
            
            $image = Image::read(Storage::disk('public')->path($routeImage));
            
            // Generate QR code
            $qrCode = QrCode::size(100)->generate($contact->name);
    
            // Insert the QR code to the bottom-left corner of the image
            $image->insert($qrCode, 'bottom-left', 10, 10);
            
            // Save the image
            $image->save(Storage::disk('public')->path($routeImage));
            
            $data['avatar'] = $routeImage;
            
            if ($contact->avatar) {
                Storage::disk('public')->delete($contact->avatar);
            }
        }
        
        $data['user_id'] = Auth::user()->id;
        $contact->update($data);
        return to_route('contact.edit', $contact);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        if($contact->avatar){
            Storage::disk('public')->delete($contact->avatar);
        }
        $contact->delete();
    }
}
