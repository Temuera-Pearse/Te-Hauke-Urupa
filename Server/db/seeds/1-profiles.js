exports.seed = async function (knex) {
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
  await knex('profiles').insert([
    {
      profile_picture: 'public/images/test-photos/maori-people1.jpeg',
      family_name: 'Doe',
      given_name: 'John Doe',
      address: '-',
      gender: 'male',
      occupation: 'comedian',
      age: '500+',
      birthDate: '25 December 1993',
      deathDate: '18 January 3005',
      intermentDate: '21 January 3005',
      intermentType: 'shot to space',
      placement: 'space',
      depth: '-',
      purchaseDate: '-',
      funeralDirector: 'nasa',
      notes: '',
      headstonePermitNumber: '420420',
      inscriptions: 'he is a rocket man',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people2.jpeg',
      family_name: 'Smith',
      given_name: 'John',
      address: '123 Main St, Cityville',
      gender: 'Male',
      Occupation: 'Software Engineer',
      age: '35',
      birthDate: '1988-01-15',
      deathDate: '2023-07-20',
      intermentDate: '2023-07-25',
      intermentType: 'Cremation',
      placement: 'Section A, Plot 123',
      depth: '3 feet',
      purchaseDate: '2023-07-22',
      funeralDirector: 'Jane Doe Funeral Services',
      notes: 'Loved by all, he will be dearly missed.',
      headstonePermitNumber: 'HPN-456789',
      inscriptions: 'In Loving Memory of John Smith',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people3.jpeg',
      family_name: 'Johnson',
      given_name: 'Emily',
      address: '456 Elm St, Townsville',
      gender: 'Female',
      Occupation: 'Teacher',
      age: '42',
      birthDate: '1981-05-10',
      deathDate: '2023-08-05',
      intermentDate: '2023-08-10',
      intermentType: 'Burial',
      placement: 'Section B, Plot 456',
      depth: '4 feet',
      purchaseDate: '2023-08-07',
      funeralDirector: 'Smith & Sons Funerals',
      notes: 'Dedicated educator and loving mother.',
      headstonePermitNumber: 'HPN-987654',
      inscriptions: 'Forever in our hearts, Emily Johnson',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people4.jpeg',
      family_name: 'Williams',
      given_name: 'Sarah',
      address: '789 Oak Ave, Villagetown',
      gender: 'Female',
      Occupation: 'Doctor',
      age: '28',
      birthDate: '1995-03-22',
      deathDate: '2023-09-10',
      intermentDate: '2023-09-15',
      intermentType: 'Burial',
      placement: 'Section C, Plot 789',
      depth: '5 feet',
      purchaseDate: '2023-09-12',
      funeralDirector: 'Graceful Farewells',
      notes: 'A compassionate healer and beloved friend.',
      headstonePermitNumber: 'HPN-123456',
      inscriptions: 'In Memory of Dr. Sarah Williams',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people5.jpeg',
      family_name: 'Martinez',
      given_name: 'Carlos',
      address: '567 Maple Rd, Hamletville',
      gender: 'Male',
      Occupation: 'Chef',
      age: '50',
      birthDate: '1973-11-08',
      deathDate: '2023-06-25',
      intermentDate: '2023-07-01',
      intermentType: 'Cremation',
      placement: 'Section D, Plot 567',
      depth: '3.5 feet',
      purchaseDate: '2023-06-27',
      funeralDirector: 'Caring Compass Funerals',
      notes: 'Master of flavors and creator of joy.',
      headstonePermitNumber: 'HPN-987123',
      inscriptions: 'Tasting life, one dish at a time.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people6.jpeg',
      family_name: 'Anderson',
      given_name: 'Olivia',
      address: '789 Pine Lane, Meadowville',
      gender: 'Female',
      Occupation: 'Artist',
      age: '29',
      birthDate: '1994-08-17',
      deathDate: '2023-10-05',
      intermentDate: '2023-10-10',
      intermentType: 'Burial',
      placement: 'Section E, Plot 789',
      depth: '4 feet',
      purchaseDate: '2023-10-07',
      funeralDirector: 'Serene Passages',
      notes: 'Her canvas was life, her art was love.',
      headstonePermitNumber: 'HPN-789012',
      inscriptions: 'Capturing beauty in every stroke.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people7.jpeg',
      family_name: 'Walker',
      given_name: 'Michael',
      address: '456 Birch Street, Riverside',
      gender: 'Male',
      Occupation: 'Architect',
      age: '45',
      birthDate: '1978-06-03',
      deathDate: '2023-11-15',
      intermentDate: '2023-11-20',
      intermentType: 'Cremation',
      placement: 'Section F, Plot 456',
      depth: '3.2 feet',
      purchaseDate: '2023-11-18',
      funeralDirector: 'Harmony Rests Funeral Home',
      notes: 'Designing dreams and building memories.',
      headstonePermitNumber: 'HPN-345678',
      inscriptions: 'Creating spaces that inspire.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people8.jpg',
      family_name: 'White',
      given_name: 'Sophia',
      address: '234 Cedar Court, Woodland',
      gender: 'Female',
      Occupation: 'Author',
      age: '60',
      birthDate: '1963-02-12',
      deathDate: '2023-12-01',
      intermentDate: '2023-12-06',
      intermentType: 'Burial',
      placement: 'Section G, Plot 234',
      depth: '4.5 feet',
      purchaseDate: '2023-12-04',
      funeralDirector: 'Eternal Reflections Funerals',
      notes: 'Her words will continue to touch hearts.',
      headstonePermitNumber: 'HPN-901234',
      inscriptions: 'In Loving Memory of Sophia White',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people9.jpeg',
      family_name: 'Brown',
      given_name: 'Ethan',
      address: '345 Oakwood Avenue, Havenhill',
      gender: 'Male',
      Occupation: 'Firefighter',
      age: '32',
      birthDate: '1991-09-28',
      deathDate: '2024-01-10',
      intermentDate: '2024-01-15',
      intermentType: 'Burial',
      placement: 'Section H, Plot 345',
      depth: '5 feet',
      purchaseDate: '2024-01-12',
      funeralDirector: 'Graceful Farewells',
      notes: 'Brave protector, forever in our hearts.',
      headstonePermitNumber: 'HPN-567890',
      inscriptions: 'Courageously serving, now at rest.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people10.jpeg',
      family_name: 'Lee',
      given_name: 'Ava',
      address: '123 Willow Lane, Meadowville',
      gender: 'Female',
      Occupation: 'Musician',
      age: '27',
      birthDate: '1996-11-03',
      deathDate: '2024-02-20',
      intermentDate: '2024-02-25',
      intermentType: 'Cremation',
      placement: 'Section I, Plot 123',
      depth: '3.8 feet',
      purchaseDate: '2024-02-22',
      funeralDirector: 'Serene Passages',
      notes: 'Her melodies will continue to resonate.',
      headstonePermitNumber: 'HPN-234567',
      inscriptions: 'Harmonizing with the universe.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people11.jpeg',
      family_name: 'Garcia',
      given_name: 'Liam',
      address: '789 Cedar Avenue, Riverside',
      gender: 'Male',
      Occupation: 'Athlete',
      age: '33',
      birthDate: '1990-04-14',
      deathDate: '2024-03-15',
      intermentDate: '2024-03-20',
      intermentType: 'Burial',
      placement: 'Section J, Plot 789',
      depth: '4.2 feet',
      purchaseDate: '2024-03-18',
      funeralDirector: 'Eternal Reflections Funerals',
      notes: 'A champion in the game of life.',
      headstonePermitNumber: 'HPN-678901',
      inscriptions: 'Running towards eternity.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people12.png',
      family_name: 'Harris',
      given_name: 'Mia',
      address: '234 Elm Street, Hamletville',
      gender: 'Female',
      Occupation: 'Environmental Scientist',
      age: '38',
      birthDate: '1985-07-12',
      deathDate: '2024-04-05',
      intermentDate: '2024-04-10',
      intermentType: 'Burial',
      placement: 'Section K, Plot 234',
      depth: '4.7 feet',
      purchaseDate: '2024-04-08',
      funeralDirector: 'Caring Compass Funerals',
      notes: 'Guardian of nature, leaving a green legacy.',
      headstonePermitNumber: 'HPN-345678',
      inscriptions: 'Protecting the Earth, now at peace.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people13.webp',
      family_name: 'Clark',
      given_name: 'Noah',
      address: '567 Maple Avenue, Villagetown',
      gender: 'Male',
      Occupation: 'Biologist',
      age: '29',
      birthDate: '1994-12-28',
      deathDate: '2024-05-15',
      intermentDate: '2024-05-20',
      intermentType: 'Cremation',
      placement: 'Section L, Plot 567',
      depth: '3.5 feet',
      purchaseDate: '2024-05-18',
      funeralDirector: 'Harmony Rests Funeral Home',
      notes: 'Exploring lifes mysteries in nature.',
      headstonePermitNumber: 'HPN-456789',
      inscriptions: 'Natures student, forever curious.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people14.jpeg',
      family_name: 'Lewis',
      given_name: 'Emma',
      address: '789 Oakwood Road, Woodland',
      gender: 'Female',
      Occupation: 'Botanist',
      age: '31',
      birthDate: '1992-02-18',
      deathDate: '2024-06-10',
      intermentDate: '2024-06-15',
      intermentType: 'Burial',
      placement: 'Section M, Plot 789',
      depth: '5 feet',
      purchaseDate: '2024-06-12',
      funeralDirector: 'Eternal Reflections Funerals',
      notes: 'Nurturer of plants, lover of life.',
      headstonePermitNumber: 'HPN-567890',
      inscriptions: 'In Remembrance of Emma Lewis',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people15.jpeg',
      family_name: 'Robinson',
      given_name: 'William',
      address: '123 Pine Lane, Meadowville',
      gender: 'Male',
      Occupation: 'Historian',
      age: '55',
      birthDate: '1968-09-05',
      deathDate: '2024-07-25',
      intermentDate: '2024-07-30',
      intermentType: 'Cremation',
      placement: 'Section N, Plot 123',
      depth: '3.8 feet',
      purchaseDate: '2024-07-28',
      funeralDirector: 'Serene Passages',
      notes: 'Preserving stories, leaving a legacy.',
      headstonePermitNumber: 'HPN-678901',
      inscriptions: 'Capturing history, one chapter at a time.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people16.avif',
      family_name: 'Perez',
      given_name: 'Isabella',
      address: '456 Birch Street, Riverside',
      gender: 'Female',
      Occupation: 'Astronomer',
      age: '40',
      birthDate: '1983-03-10',
      deathDate: '2024-08-12',
      intermentDate: '2024-08-17',
      intermentType: 'Burial',
      placement: 'Section O, Plot 456',
      depth: '4.5 feet',
      purchaseDate: '2024-08-15',
      funeralDirector: 'Starry Skies Funerals',
      notes: 'Exploring the cosmos, now among the stars.',
      headstonePermitNumber: 'HPN-789012',
      inscriptions: 'Finding wonder in the universe.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people17.jpeg',
      family_name: 'Baker',
      given_name: 'Ella',
      address: '234 Cedar Avenue, Riverside',
      gender: 'Female',
      Occupation: 'Baker',
      age: '47',
      birthDate: '1977-04-28',
      deathDate: '2024-09-18',
      intermentDate: '2024-09-23',
      intermentType: 'Cremation',
      placement: 'Section P, Plot 234',
      depth: '3.5 feet',
      purchaseDate: '2024-09-20',
      funeralDirector: 'Caring Compass Funerals',
      notes: 'Bringing sweetness to every moment.',
      headstonePermitNumber: 'HPN-901234',
      inscriptions: 'Creating memories, one recipe at a time.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people18.jpeg',
      family_name: 'Turner',
      given_name: 'James',
      address: '567 Elm Street, Hamletville',
      gender: 'Male',
      Occupation: 'Actor',
      age: '42',
      birthDate: '1982-11-15',
      deathDate: '2024-10-05',
      intermentDate: '2024-10-10',
      intermentType: 'Burial',
      placement: 'Section Q, Plot 567',
      depth: '4.2 feet',
      purchaseDate: '2024-10-08',
      funeralDirector: 'Eternal Reflections Funerals',
      notes: 'His performances will live on in our hearts.',
      headstonePermitNumber: 'HPN-234567',
      inscriptions: 'Lights, camera, eternal action.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people19.jpeg',
      family_name: 'Cooper',
      given_name: 'Lily',
      address: '789 Maple Road, Villagetown',
      gender: 'Female',
      Occupation: 'Photographer',
      age: '36',
      birthDate: '1988-08-02',
      deathDate: '2024-11-20',
      intermentDate: '2024-11-25',
      intermentType: 'Cremation',
      placement: 'Section R, Plot 789',
      depth: '3.8 feet',
      purchaseDate: '2024-11-22',
      funeralDirector: 'Graceful Farewells',
      notes: 'Capturing moments that tell stories.',
      headstonePermitNumber: 'HPN-345678',
      inscriptions: 'In Focus: Lily Cooper',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
    {
      profile_picture: 'public/images/test-photos/maori-people20.webp',
      family_name: 'King',
      given_name: 'Daniel',
      address: '123 Oakwood Avenue, Meadowville',
      gender: 'Male',
      Occupation: 'Music Composer',
      age: '51',
      birthDate: '1973-01-10',
      deathDate: '2024-12-15',
      intermentDate: '2024-12-20',
      intermentType: 'Burial',
      placement: 'Section S, Plot 123',
      depth: '5 feet',
      purchaseDate: '2024-12-18',
      funeralDirector: 'Serene Passages',
      notes: 'Harmonizing lifes melodies, leaving a legacy.',
      headstonePermitNumber: 'HPN-456789',
      inscriptions: 'Composing the symphony of existence.',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
  ])
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
}
