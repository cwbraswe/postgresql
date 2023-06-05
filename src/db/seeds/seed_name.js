/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    {category_id: 1, category_name: 'category', category_description: 'suppliers'},
    {category_id: 2, category_name: 'movies', category_description: 'action'},
    {category_id: 3, category_name: 'music', category_description: 'genres'}
  ]);
};
