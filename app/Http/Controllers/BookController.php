<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        return Book::all();
    }

    public function show($id)
    {
        return Book::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'published_year' => 'required|integer',
            'genre' => 'required|string',
            'description' => 'required|string',
        ]);

        return Book::create($validatedData);
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);
        $validatedData = $request->validate([
            'title' => 'sometimes|required|string',
            'author' => 'sometimes|required|string',
            'published_year' => 'sometimes|required|integer',
            'genre' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
        ]);

        $book->update($validatedData);
        return $book;
    }

    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
}