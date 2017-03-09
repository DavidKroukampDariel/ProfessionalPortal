import { Professional } from "../classes/Professional";

export function getExampleProfessional(): Professional {
    var professional = new Professional();

    professional.name = "Bob";
    professional.surname = "Burger";
    professional.skills = ["Skill1", "Skill2"];
    professional.yearsOfExperience = 3;

    return professional;
}