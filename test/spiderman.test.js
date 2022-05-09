const Spiderman = require('./../app/spiderman')

describe("Unit Tests for Spiderman Class", () => {
  test('1) Create an spiderman obj.', () => {
    
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")


    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });

  test('2) Use the method getInfo()', () =>{
    const tomHolland = new Spiderman('Spiderman Marvel', 25, 'Kenny Rogers', 3, 'Jackass')

    expect(tomHolland.getInfo()).toBe("Hi I´m Kenny Rogers and this is Jackass")
  });
})