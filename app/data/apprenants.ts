import { Province } from "./Province";

export type Apprenant = {
  id?: number | null;
  nom?: string | null;
  prenom?: string | null;
  dateNaissance?: string | null;
  adresse?: string | null;
  situationFamilial?: string | null;
  cin?: string | null;
  email?: string | null;
  nomUniversite?: string | null;
  adresseUniversite?: string | null;
  specialite?: string | null;
  assure?: boolean | null;
  attestationsAssurance?: File | null;
  dateDebutFormation1?: string | null;
  dateFinFormation1?: string | null;
  province1?: Province | null;
  dateDebutFormation2?: string | null;
  dateFinFormation2?: string | null;
  province2?: Province | null;
  dateDebutFormation3?: string | null;
  dateFinFormation3?: string | null;
  province3?: Province | null;
  demande?: File | null;
};

export const apprenants: Apprenant[] = [
  {
    id: 2,
    nom: "Mohammed",
    prenom: "Youssef",
    dateNaissance: "1995-05-15",
    adresse: "Casablanca",
    situationFamilial: "Marié",
    cin: "CD654321",
    email: "youssef.mohammed@example.com",
    nomUniversite: "ENSIAS",
    adresseUniversite: "Rabat",
    specialite: "Génie Logiciel",
    assure: false,
    attestationsAssurance: null,
    dateDebutFormation1: "2022-01-15",
    dateFinFormation1: "2022-06-15",
    province1: {
      id: 2,
      name: "Rabat",
      region: {
        id: 2,
        name: "Rabat-Salé-Kénitra",
      },
    },
    demande: null,
  },
  {
    id: 3,
    nom: "Amine",
    prenom: "Amine",
    dateNaissance: "2021-10-01",
    adresse: "Ain Sebaa",
    situationFamilial: "Célibataire",
    cin: "AB123456",
    email: "test2@mail.com",
    nomUniversite: "FST",
    adresseUniversite: "FST",
    specialite: "Informatique",
    assure: true,
    attestationsAssurance: null,
    dateDebutFormation1: "2021-10-01",
    dateFinFormation1: "2021-10-01",
    province1: {
      id: 1,
      name: "Tanger",
      region: {
        id: 1,
        name: "Tanger-Tétouan-Al Hoceïma",
      },
    },
    demande: null,
  },
  {
    id: 3,
    nom: "Fatima",
    prenom: "Ahmed",
    dateNaissance: "1990-12-25",
    adresse: "Marrakech",
    situationFamilial: "Célibataire",
    cin: "EF789012",
    email: "ahmed.fatima@example.com",
    nomUniversite: "Faculté des Sciences Semlalia",
    adresseUniversite: "Marrakech",
    specialite: "Biologie",
    assure: true,
    attestationsAssurance: null,
    dateDebutFormation1: "2019-09-01",
    dateFinFormation1: "2023-06-30",
    province1: {
      id: 5,
      name: "Fès",
      region: {
        id: 5,
        name: "Fès-Meknès",
      },
    },
    demande: null,
  },
  {
    id: 4,
    nom: "Leila",
    prenom: "Khalid",
    dateNaissance: "1993-08-10",
    adresse: "Tétouan",
    situationFamilial: "Célibataire",
    cin: "GH456789",
    email: "khalid.leila@example.com",
    nomUniversite: "Faculté des Lettres et des Sciences Humaines",
    adresseUniversite: "Tétouan",
    specialite: "Littérature Française",
    assure: false,
    attestationsAssurance: null,
    dateDebutFormation1: "2012-09-01",
    dateFinFormation1: "2016-06-30",
    province1: {
      id: 7,
      name: "Tanger",
      region: {
        id: 1,
        name: "Tanger-Tétouan-Al Hoceïma",
      },
    },
    demande: null,
  },
];
