<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/test-image', function() {

    $routeImage='4T6LZCoIf0FW9CRnUj1ir29Is91OPNkvsm43s8NL.jpg';
    $routeImage1='avatars/lhcA9T0txXfvb5DjuZuWm2pmldEd4hd97rWXxSQi12.jpg';
    $imagePath = storage_path('app/public/avatars/' . $routeImage);
//dd($imagePath);
    // Check if the image exists
    if (file_exists($imagePath)) {
        /*
        $image = Image::read($imagePath);

        // Generate a QR code
        $qrCode = QrCode::format('png')->size(200)->generate('Your QR Code Data');
        $qrImage = Image::read($qrCode);

        // Insert the QR code at the bottom-left corner
        $image->insert($qrImage, 'bottom-left', 10, 10);

        // Save the modified image
        $image->save($imagePath);
*/
        $image = Image::read($imagePath)->resize(300, 200);
        //$image->toPng()->save('app/public/avatars/foo.png');
        $image->save(Storage::disk('public')->path($routeImage1));
        return $image->response('jpg');

    } else {
        return response()->json(['error' => 'Image file does not exist.'], 400);
    }

    //$image = Image::make('https://via.placeholder.com/300')->resize(300, 200);
    //dd(public_path('4T6LZCoIf0FW9CRnUj1ir29Is91OPNkvsm43s8NL.jpg')); 
    //$image = Image::read(public_path('4T6LZCoIf0FW9CRnUj1ir29Is91OPNkvsm43s8NL.jpg'));
    //$image = ImageManager::imagick()->read(public_path('4T6LZCoIf0FW9CRnUj1ir29Is91OPNkvsm43s8NL.jpg'));

// resize to 300 x 200 pixel
//$image->resize(300, 200);
// create image manager with desired driver

   // $image = Image::read('storage/app/public/avatars/4T6LZCoIf0FW9CRnUj1ir29Is91OPNkvsm43s8NL.jpg');

/*
$manager = new ImageManager(new Driver());

// read image from file system
$image = $manager->read('storage/app/public/avatars/4T6LZCoIf0FW9CRnUj1ir29Is91OPNkvsm43s8NL.jpg');

// resize image proportionally to 300px width
$image->scale(300);

// insert watermark
$image->place('images/watermark.png');

// save modified image in new format 
$image->toPng()->save('images/foo.png');  
*/
return $image->response('jpg');
});
Route::prefix('dashboard')->middleware('auth')->group(function () {
    Route::get('contacts',[ContactController::class, 'index'])->name('contact.index');
    Route::get('contacts/create',[ContactController::class, 'create'])->name('contact.create');
    Route::post('contacts',[ContactController::class, 'store'])->name('contact.store');
    Route::get('contacts/{contact}/edit',[ContactController::class, 'edit'])->name('contact.edit');
    Route::post('contacts/{contact}',[ContactController::class, 'update'])->name('contact.update');
    Route::delete('contacts/{contact}',[ContactController::class, 'destroy'])->name('contact.destroy');
    Route::get('contacts/{contact}',[ContactController::class, 'show'])->name('contact.show');

});

require __DIR__.'/auth.php';
