<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Carbon\Carbon;
class PublicContactController extends Controller
{
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        // Verificar el valor crudo de la fecha
        
        //dd($contact->emitida_en);
        //$prescribeEl = $contact->emitida_en;
        //dd($prescribeEl);  // Verifica este valor

        // Convertir a una instancia de Carbon
        //$prescribeElCarbon = Carbon::parse($prescribeEl);

        // Formatear la fecha
        //$formattedDate = $prescribeElCarbon->formatLocalized('%d de %B de %Y');
        //dd($formattedDate);  // Verifica este valor también

        //$contact->emitida_en = $formattedDate;
        return inertia('PublicContact/Show', ['contact' => $contact]);
    }
}
