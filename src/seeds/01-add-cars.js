exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 'lx03mhn',
          make: 'seat',
          model: 'leon',
          mileage: 145701,
          transmission: '6 speed manual',
          status: 'clean'
        },
        {
          vin: 'sx19ghm',
          make: 'mercedes-benz',
          model: 'black',
          mileage: 0,
          status: 'new'
        },
        { vin: 'ww14vmm', make: 'ford', model: 'focus', mileage: 44003 }
      ]);
    });
};
