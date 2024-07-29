<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class PublicContactController extends Controller
{
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        return inertia('PublicContact/Show', ['contact' => $contact]);
    }
}
