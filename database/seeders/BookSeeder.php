<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run()
    {
        Book::create([
            'title' => 'The Great Gatsby',
            'author' => 'F. Scott Fitzgerald',
            'published_year' => 1925,
            'genre' => 'Fiction',
            'description' => 'A novel about the American dream and the disillusionment that comes with it.',
        ]);

        Book::create([
            'title' => 'To Kill a Mockingbird',
            'author' => 'Harper Lee',
            'published_year' => 1960,
            'genre' => 'Fiction',
            'description' => 'A story of racial injustice and moral growth in the Deep South.',
        ]);

        Book::create([
            'title' => '1984',
            'author' => 'George Orwell',
            'published_year' => 1949,
            'genre' => 'Dystopian',
            'description' => 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
        ]);

        Book::create([
            'title' => 'Pride and Prejudice',
            'author' => 'Jane Austen',
            'published_year' => 1813,
            'genre' => 'Romance',
            'description' => 'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
        ]);

        Book::create([
            'title' => 'The Catcher in the Rye',
            'author' => 'J.D. Salinger',
            'published_year' => 1951,
            'genre' => 'Fiction',
            'description' => 'A story about teenage angst and alienation.',
        ]);

        Book::create([
            'title' => 'The Hobbit',
            'author' => 'J.R.R. Tolkien',
            'published_year' => 1937,
            'genre' => 'Fantasy',
            'description' => 'A fantasy novel about the adventures of a hobbit named Bilbo Baggins.',
        ]);

        Book::create([
            'title' => 'Fahrenheit 451',
            'author' => 'Ray Bradbury',
            'published_year' => 1953,
            'genre' => 'Dystopian',
            'description' => 'A novel about a future society where books are banned and "firemen" burn any that are found.',
        ]);

        Book::create([
            'title' => 'Brave New World',
            'author' => 'Aldous Huxley',
            'published_year' => 1932,
            'genre' => 'Dystopian',
            'description' => 'A novel that explores a futuristic society driven by technological advancements and consumerism.',
        ]);

        Book::create([
            'title' => 'Moby-Dick',
            'author' => 'Herman Melville',
            'published_year' => 1851,
            'genre' => 'Adventure',
            'description' => 'The narrative of Captain Ahab’s obsessive quest to kill the giant white whale, Moby Dick.',
        ]);

        Book::create([
            'title' => 'War and Peace',
            'author' => 'Leo Tolstoy',
            'published_year' => 1869,
            'genre' => 'Historical Fiction',
            'description' => 'A historical novel that chronicles the history of the French invasion of Russia.',
        ]);
    }
}