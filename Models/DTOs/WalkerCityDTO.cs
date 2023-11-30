using System.Diagnostics.Contracts;

namespace DeshawnsDogWalking.Models.DTOs;
public class WalkerCityDTO
{
    public int Id {get; set;}
    public int CityId {get; set;}
    public int WalkerId {get; set;}
}