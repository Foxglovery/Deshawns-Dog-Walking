namespace DeshawnsDogWalking.Models.DTOs;
public class CityDTO
{
    public int Id {get; set;}
    public string Name {get; set;}
    public List<Walker> Walkers {get; set;}
}