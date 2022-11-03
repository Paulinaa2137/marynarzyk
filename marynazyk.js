// Napisz funkcję, która będzie prostą wersją gry “Kamień, papier, nożyce”. Może to być wersja polska lub angielska.
//  Funkcja jako argumenty przyjmuje dwa stringi (“kamień”, “papier” lub “nożyce”), a następnie w formie alertu podaje wynik (czyli np. wypisuje “Gracz nr 1 wygrał” – zakładamy, że gracz numer 1 to osoba, która podała pierwszy string).

function Gra_kpn(gracz1, gracz2) {
  function sprawdzanie(gracz1, gracz2) {
    if (gracz1 === gracz2) {
      return "0";
    }
    if (gracz1 === "kamien") {
      if (gracz2 === "nozyce") {
        return "1";
      } else {
        return "2";
      }
    }
    if (gracz1 === "papier") {
      if (gracz2 === "kamien") {
        return "1";
      } else {
        return "2";
      }
    }
    if (gracz1 === "nozyce") {
      if (gracz2 === "papier") {
        return "1";
      } else {
        return "2";
      }
    }
  }

  function wygranyjest() {
    if (sprawdzanie(gracz1, gracz2) === "1") {
      return "Wygral gracz numer jeden";
    }
    if (sprawdzanie(gracz1, gracz2) === "2") {
      return "Wygral gracz numer dwa";
    }
    if (sprawdzanie(gracz1, gracz2) === "0") {
      return "Remis";
    }
  }

  return wygranyjest();
}

console.log(Gra_kpn("papier", "papier"));
