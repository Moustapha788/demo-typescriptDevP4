/*
* Moustapha Gaye
*/
var Semaine;
(function (Semaine) {
    Semaine[Semaine["lundi"] = 0] = "lundi";
    Semaine[Semaine["Mardi"] = 0] = "Mardi";
    Semaine[Semaine["Mercredi"] = 1] = "Mercredi";
    Semaine[Semaine["Jeudi"] = 2] = "Jeudi";
    Semaine[Semaine["Vendredi"] = 3] = "Vendredi";
    Semaine[Semaine["Samedi"] = 4] = "Samedi";
    Semaine[Semaine["Dimanche"] = 5] = "Dimanche";
})(Semaine || (Semaine = {}));
var Sexe;
(function (Sexe) {
    Sexe["f"] = "Femme";
    Sexe["m"] = "Homme";
})(Sexe || (Sexe = {}));
console.log(Sexe.m);
