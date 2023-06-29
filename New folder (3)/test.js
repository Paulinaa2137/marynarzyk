function format(liczba, lmpp) {
    ile = ""+Math.round(liczba*Math.pow(10,lmpp))/Math.pow(10,lmpp);
    if (ile.indexOf(".")<0) ile+=".0";
    while ((ile.length-ile.indexOf(".")-1)<lmpp) ile = ile+"0";
    return parseFloat(ile);
  }