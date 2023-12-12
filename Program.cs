using DeshawnsDogWalking.Models;
using DeshawnsDogWalking.Models.DTOs;
using Microsoft.AspNetCore.Authorization.Infrastructure;

List<Dog> dogs = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Sir HuffNPuff",
        CityId = 0,
        WalkerId = 0,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 2,
        Name = "Sproket",
        CityId = 1,
        WalkerId = 2,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 3,
        Name = "Frouzie",
        CityId = 3,
        WalkerId = 1,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 4,
        Name = "Molly",
        CityId = 2,
        WalkerId = 4,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 5,
        Name = "Orville",
        CityId = 4,
        WalkerId = 3,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 6,
        Name = "Mr. Peanut",
        CityId = 5,
        WalkerId = 2,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 7,
        Name = "Bertram",
        CityId = 1,
        WalkerId = 1,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 8,
        Name = "Pnubbins",
        CityId = 2,
        WalkerId = 5,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 9,
        Name = "Cinamorg",
        CityId = 1,
        WalkerId = null,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 10,
        Name = "Basic Betty",
        CityId = 3,
        WalkerId = null,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    },
    new Dog()
    {
        Id = 11,
        Name = "Ruckers",
        CityId = 6,
        WalkerId = null,
        ImgURL = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Longhaired_Dachshund_portrait.jpg"
    }
};

List<City> cities = new List<City>()
{
    new City()
    {
        Id = 1,
        Name = "Columbia, TN"
    },
    new City()
    {
        Id = 2,
        Name = "Spring Hill, TN"
    },
    new City()
    {
        Id = 3,
        Name = "Franklin, TN"
    },
    new City()
    {
        Id = 4,
        Name = "Signal Mountain, TN"
    },
    new City()
    {
        Id = 5,
        Name = "Antioch, TN"
    },
    new City()
    {
        Id = 6,
        Name = "Soddy-Daisy, TN"
    },
};

List<Walker> walkers = new List<Walker>()
{
    new Walker()
    {
        Id = 1,
        Name = "Groogery Adlerburb",
        ImgURL = "https://images.pixexid.com/a-persons-face-expressing-a-sense-of-accomplishment-and-satisfaction-as-they-su-bbjsmazg.webp?h=700&q=70"
    },
    new Walker()
    {
        Id = 2,
        Name = "Euphigenia Doubtfire",
        ImgURL = "https://images.pixexid.com/a-persons-face-expressing-a-sense-of-accomplishment-and-satisfaction-as-they-su-bbjsmazg.webp?h=700&q=70"
    },
    new Walker()
    {
        Id = 3,
        Name = "Arlington Muskwrath",
        ImgURL = "https://images.pixexid.com/a-persons-face-expressing-a-sense-of-accomplishment-and-satisfaction-as-they-su-bbjsmazg.webp?h=700&q=70"
    },
    new Walker()
    {
        Id = 4,
        Name = "Jorbilez Runitolk",
        ImgURL = "https://images.pixexid.com/a-persons-face-expressing-a-sense-of-accomplishment-and-satisfaction-as-they-su-bbjsmazg.webp?h=700&q=70"
    },
    new Walker()
    {
        Id = 5,
        Name = "Sassimere Palustrade",
        ImgURL = "https://images.pixexid.com/a-persons-face-expressing-a-sense-of-accomplishment-and-satisfaction-as-they-su-bbjsmazg.webp?h=700&q=70"
    },
    new Walker()
    {
        Id = 6,
        Name = "Cinnora Chucklefrooth",
        ImgURL = "https://images.pixexid.com/a-persons-face-expressing-a-sense-of-accomplishment-and-satisfaction-as-they-su-bbjsmazg.webp?h=700&q=70"
    }
};

List<WalkerCity> walkerCities = new List<WalkerCity>()
{
    new WalkerCity()
    {
        Id = 1,
        CityId = 1,
        WalkerId = 1
    },
    new WalkerCity()
    {
        Id = 2,
        CityId = 2,
        WalkerId = 2
    },
    new WalkerCity()
    {
        Id = 3,
        CityId = 3,
        WalkerId = 3
    },
    new WalkerCity()
    {
        Id = 4,
        CityId = 4,
        WalkerId = 4
    },
    new WalkerCity()
    {
        Id = 5,
        CityId = 5,
        WalkerId = 5
    },
    new WalkerCity()
    {
        Id = 6,
        CityId = 6,
        WalkerId = 6
    },

    new WalkerCity()
    {
        Id = 7,
        CityId = 2,
        WalkerId = 1
    },
    new WalkerCity()
    {
        Id = 8,
        CityId = 4,
        WalkerId = 3
    },
    new WalkerCity()
    {
        Id = 9,
        CityId = 1,
        WalkerId = 2
    },
};




var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () =>
{
    return dogs.Select(d => new DogDTO
    {
        Id = d.Id,
        Name = d.Name,
        CityId = d.CityId,
        WalkerId = d.WalkerId,
        ImgURL = d.ImgURL

    });
});

app.MapGet("/api/walkers", () =>
{
    return walkers.Select(w => new WalkerDTO
    {
        Id = w.Id,
        Name = w.Name,
        ImgURL = w.ImgURL,
        Cities = w.Cities

    });
});

// app.MapGet("/api/WalkerCity/{id}", (int id) =>
// {   //makes a list of walkerCity entries with matching walker id
//     List<WalkerCity> walkersForCity = walkerCities.Where(wc => wc.CityId == id).ToList();
//     List<Walker>  = walkersForCity.Select(wcw => cities.First(c => c.Id == wcw.CityId)).ToList();


// });

app.MapGet("/api/walkerCities/{cityId}", (int cityId) =>
{   //gets list of entries for that city
    List<WalkerCity> walkerCitiesForCity = walkerCities.Where(wc => wc.CityId == cityId).ToList();
    //initialize a new list of walkers
    List<Walker> walkersForCity = new List<Walker>();
    //for each find the matches on walker list
    foreach (var walkerCity in walkerCitiesForCity)
    {
        Walker matchingWalker = walkers.FirstOrDefault(w => w.Id == walkerCity.WalkerId);

        if (matchingWalker != null)
        {//if valid, add to new list
            walkersForCity.Add(matchingWalker);
        }

    }
    if (walkersForCity.Count == 0)
    {
        return Results.NotFound("No Walkers Found For This City");
    }
    return Results.Ok(walkersForCity);

});

app.MapGet("/api/walkers/{walkerId}", (int walkerId) =>
{   //grab specific walker
    Walker walker = walkers.FirstOrDefault(w => w.Id == walkerId);
    //make of list of cities for that walker
    List<WalkerCity> walkerCitiesForWalker = walkerCities.Where(wc => wc.WalkerId == walkerId).ToList();
    //make list of city entries for those walkercity entries
    List<City> citiesForWalker = walkerCitiesForWalker.Select(wc => cities.First(c => c.Id == wc.CityId)).ToList();
    //add list of city entries to cities property
    walker.Cities = citiesForWalker;
    if (walker == null)
    {
        return Results.BadRequest();
    }
    return Results.Ok(walker);
});

app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog chosenDog = dogs.FirstOrDefault(d => d.Id == id);
    if (chosenDog == null)
    {
        return Results.BadRequest();
    }
    return Results.Ok(chosenDog);
});

app.MapGet("/api/walkers/byDog/{id}", (int id) =>
{
    Walker dogWalker = walkers.FirstOrDefault(w => w.Id == id);
    if (dogWalker == null)
    {
        return Results.BadRequest();
    }
    return Results.Ok(dogWalker);
});

//WRITE ENDPOINT FOR POSTING NEW DOG TODO

app.MapPost("/api/dogs", (Dog dog) =>
{
    dog.Id = dogs.Max(d => d.Id) + 1;
    if (dog.Name == "" || dog.CityId == null)
    {
        return Results.BadRequest();
    }
    dogs.Add(dog);
    return Results.Created($"/api/dogs/{dog.Id}", new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        ImgURL = dog.ImgURL,
        CityId = dog.CityId,
        WalkerId = dog.WalkerId
    });
});

app.MapGet("/api/cities", () =>
{
    return cities.Select(c => new CityDTO
    {
        Id = c.Id,
        Name = c.Name,
        Walkers = c.Walkers
    });
});

app.MapPost("/api/cities", (City city) =>
{   //create new id in order
    city.Id = cities.Max(c => c.Id) + 1;
    if (city.Name == "")
    {
        return Results.BadRequest();
    }
    cities.Add(city);
    return Results.Created($"/api/cities/{city.Id}", new CityDTO
    {
        Id = city.Id,
        Name = city.Name,
        Walkers = city.Walkers
    });
});

app.MapPut("/api/dogs/{id}", (int id, Dog dog) =>
{   //grab dog to update
    Dog dogToUpdate = dogs.FirstOrDefault(d => d.Id == id);
    //make sure dog exists
    if (dogToUpdate == null)
    {
        return Results.BadRequest();
    }
    if (id != dog.Id)
    {
        return Results.BadRequest();
    }
    dogToUpdate.WalkerId = dog.WalkerId;
    return Results.NoContent();
});

app.MapPost("/api/walkerCities", (Walker walker) =>
{
walkerCities = walkerCities.Where(wc => wc.WalkerId != walker.Id).ToList();

foreach (City city in walker.Cities)
{
    WalkerCity newWC = new WalkerCity
    {
        WalkerId = walker.Id,
        CityId = city.Id
    };
    newWC.Id = walkerCities.Count > 0 ? walkerCities.Max(wc => wc.Id) + 1 : 1;
    walkerCities.Add(newWC);
}
});

app.MapDelete("/api/dogs/{dogId}", (int dogId) =>
{
    Dog dogToDelete = dogs.FirstOrDefault(d => d.Id == dogId);

    if (dogToDelete == null || dogId != dogToDelete.Id)
    {
        return Results.BadRequest();
    }
    dogs.Remove(dogToDelete);
    return Results.NoContent();
});


app.Run();
