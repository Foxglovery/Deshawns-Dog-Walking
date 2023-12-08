namespace DeshawnsDogWalking.Models;
public class Dog
{
    public int Id {get; set;}
    public string Name {get; set;}
    public int CityId {get; set;}
    public int? WalkerId  {get; set;}
    public string ImgURL {get; set;}
}