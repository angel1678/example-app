<?php

namespace App\Http\Controllers;

use App\Http\Requests\Contact\StoreRquest;
use App\Http\Requests\Contact\UpdateRequest;
use App\Models\Contact;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Laravel\Facades\Image;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

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
/*
$request->validate([
'name' => 'required|string|max:255',
'phone' => 'required|string|max:255',
'email' => 'required|email|max:255',
'skills' => 'array', // Validar que sea un array
'skills.*' => 'string|max:255', // Validar cada habilidad
]);
 */
        $data = $request->only('name', 'email', 'phone', 'description', 'visibility', 'detallename', 'skills', 'emitida_en', 'emitida_en2', 'prescribe_el');
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $routeImage = $file->store('avatars', ['disk' => 'public']);
            $data['avatar'] = $routeImage;
        }
        if (!empty($data['emitida_en'])) {
            $data['emitida_en'] = date('Y-m-d', strtotime($data['emitida_en']));
        }
        if (!empty($data['emitida_en2'])) {
            $data['emitida_en2'] = date('Y-m-d', strtotime($data['emitida_en2']));
        }
        $data['user_id'] = Auth::user()->id;
        $data['title'] = $data['detallename'] . '.' . $data['name'] . '.' . 'InconGroup Academy';
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
        //dd($contact);
        //$contact = Contact::findOrFail($contact);
        //return response()->json($contact);
        return Inertia::render('Contact/onepage', compact('contact'));
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
        //dd($contact);
        $data = $request->only('name', 'email', 'phone', 'description', 'visibility', 'detallename', 'skills', 'emitida_en', 'emitida_en2', 'prescribe_el', 'title','description1','image','url');
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $routeImage = $file->store('avatars', ['disk' => 'public']);
            $data['avatar'] = $routeImage;
            $image2 = url("/storage/{$routeImage}");
            $data['image'] = $image2;
            $url = url("/contact/{$contact->id}");
            $qrCodeContent = QrCode::format('png')->size(100)->generate($url);
            $qrCodePath = storage_path('app/public/temp_qr_code.png');
            file_put_contents($qrCodePath, $qrCodeContent);
            $image = Image::read(Storage::disk('public')->path($routeImage));
            $qrImage = Image::read($qrCodePath);
            $image->text($contact->description, 310, 357, function ($font) {
                $font->file(public_path('fonts/arial.ttf')); // Usa una fuente válida
                $font->size(15);
                $font->color('#000000');
                $font->align('center');
                $font->valign('middle');
            });
        $image->text($contact->name, 420, 300, function ($font) {
            $font->file(public_path('fonts/arial.ttf')); // Usa una fuente válida
            $font->size(23);
            $font->color('#000000');
            $font->align('center');
            $font->valign('middle');
        });
        $image->text($contact->detallename, 420, 395, function ($font) {
            $font->file(public_path('fonts/arial.ttf')); // Usa una fuente válida
            $font->size(23);
            $font->color('#000000');
            $font->align('center');
            $font->valign('middle');
        });
            $image->place($qrImage, 'bottom-right', 30, 30);
            $image->save(Storage::disk('public')->path($routeImage));
            unlink($qrCodePath);
            if ($contact->avatar) {
                Storage::disk('public')->delete($contact->avatar);
            }
        }
        //dd('qwe');
        //dd($data['emitida_en']);
        if (!empty($data['emitida_en'])) {
            $data['emitida_en'] = date('Y-m-d', strtotime($data['emitida_en']));
        }
        if (!empty($data['emitida_en2'])) {
            $data['emitida_en2'] = date('Y-m-d', strtotime($data['emitida_en2']));
        }
        $data['user_id'] = Auth::user()->id;
        
        //dd($data['name']);

        $data['title'] = $data['detallename'] . ' * ' . $data['name'] . ' * ' . 'InconGroup Academy';
        $data['description1'] = 'Home of digital credentials';
        
        
        
        //dd($url);
        $data['url'] = $url;

        //dd($data['title']);
        $contact->update($data);
        return to_route('contact.edit', $contact);

/*
$data =$request->only('name','email','phone','description', 'visibility');
if($request->hasFile('avatar')){
$file=$request->file('avatar');
$routeImage = $file->store('avatars', ['disk' => 'public']);
$data['avatar'] = $routeImage;
if($contact->avatar){
Storage::disk('public')->delete($contact->avatar);
}
}
$data['user_id'] = Auth::user()->id;
$contact->update($data);
return to_route('contact.edit', $contact);
 */
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        if ($contact->avatar) {
            Storage::disk('public')->delete($contact->avatar);
        }
        $contact->delete();
    }
}
