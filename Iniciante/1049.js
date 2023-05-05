let A1 = lines.shift();
let A2 = lines.shift();
let A3 = lines.shift();

if (A1 == 'vertebrado') {
  if (A2 == 'ave') {
    if (A3 == 'carnivoro') {
      console.log('aguia');
    } else if (A3 == 'onivoro') {
      console.log('pomba');
    }
  } else if (A2 == 'mamifero') {
    if (A3 == 'onivoro') {
      console.log('homem');
    } else if (A3 == 'herbivoro') {
      console.log('vaca');
    }
  }
} else {
  if (A2 == 'inseto') {
    if (A3 == 'hematofago') {
      console.log('pulga');
    } else if (A3 == 'herbivoro') {
      console.log('lagarta');
    }
  } else if (A2 == 'anelideo') {
    if (A3 == 'hematofago') {
      console.log('sanguessuga');
    } else if (A3 == 'onivoro') {
      console.log('minhoca');
    }
  }
}
