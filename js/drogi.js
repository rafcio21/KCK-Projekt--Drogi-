function generuj_droge(ax,ay) {
  var control1x;
  var control1y;
  var bx;
  var by;
  this.arcType = random(1,3);
  this.kierunek = kierunki[kierunki.length - 1].zwroc_kierunek();
    switch(this.kierunek)
    {
    case "north":
      if(this.arcType == 1)
      {
        control1x = ax - 50;
        control1y = ay - 50;
        bx = ax;
        by = ay - 100;
      }
      else if(this.arcType == 2)
      {
        control1x = ax;
        control1y = ay - 50;
        bx = ax;
        by = ay - 100;
      }
      else
      {
        control1x = ax + 50;
        control1y = ay - 50;
        bx = ax;
        by = ay - 100;
      }
      break;
    case "south":
      if(this.arcType == 1)
      {
        control1x = ax - 50;
        control1y = ay + 50;
        bx = ax;
        by = ay + 100;
      }
      else if(this.arcType == 2)
      {
        control1x = ax;
        control1y = ay + 50;
        bx = ax;
        by = ay + 100;
      }
      else
      {
        control1x = ax + 50;
        control1y = ay + 50;
        bx = ax;
        by = ay + 100;
      }
      break;
    case "east":
      if(this.arcType == 1)
      {
        control1x = ax + 50;
        control1y = ay - 50;
        bx = ax + 100;
        by = ay;
      }
      else if(this.arcType == 2)
      {
        control1x = ax + 50;
        control1y = ay;
        bx = ax + 100;
        by = ay;
      }
      else
      {
        control1x = ax + 50;
        control1y = ay + 50;
        bx = ax + 100;
        by = ay;
      }
      break;
    case "west":
      if(this.arcType == 1)
      {
        control1x = ax - 50;
        control1y = ay - 50;
        bx = ax - 100;
        by = ay;
      }
      else if(this.arcType == 2)
      {
        control1x = ax - 50;
        control1y = ay;
        bx = ax - 100;
        by = ay;
      }
      else
      {
        control1x = ax - 50;
        control1y = ay + 50;
        bx = ax - 100;
        by = ay;
      }
      break;
    case "north-west":
      if(this.arcType == 1)
      {
        control1x = ax - 100;
        control1y = ay;
        bx = ax - 100;
        by = ay - 100;
      }
      else if(this.arcType == 2)
      {
        control1x = ax - 50;
        control1y = ay - 50;
        bx = ax - 100;
        by = ay - 100;
      }
      else
      {
        control1x = ax;
        control1y = ay - 100;
        bx = ax - 100;
        by = ay - 100;
      }
      break;
    case "north-east":
      if(this.arcType == 1)
      {
        control1x = ax;
        control1y = ay - 100;
        bx = ax + 100;
        by = ay - 100;
      }
      else if(this.arcType == 2)
      {
        control1x = ax + 50;
        control1y = ay - 50;
        bx = ax + 100;
        by = ay - 100;
      }
      else
      {
        control1x = ax + 100;
        control1y = ay;
        bx = ax + 100;
        by = ay - 100;
      }
      break;
    case "south-west":
      if(this.arcType == 1)
      {
        control1x = ax - 100;
        control1y = ay;
        bx = ax - 100;
        by = ay + 100;
      }
      else if(this.arcType == 2)
      {
        control1x = ax - 50;
        control1y = ay + 50;
        bx = ax - 100;
        by = ay + 100;
      }
      else
      {
        control1x = ax;
        control1y = ay + 100;
        bx = ax - 100;
        by = ay + 100;
      }
      break;
    case "south-east":
      if(this.arcType == 1)
      {
        control1x = ax + 100;
        control1y = ay;
        bx = ax + 100;
        by = ay + 100;
      }
      else if(this.arcType == 2)
      {
        control1x = ax + 50;
        control1y = ay + 50;
        bx = ax + 100;
        by = ay + 100;
      }
      else
      {
        control1x = ax;
        control1y = ay + 100;
        bx = ax + 100;
        by = ay + 100;
      }
      break;
  };
  ctx.quadraticCurveTo(
    control1x,
    control1y,
    bx,
    by
  );
  ctx.fillRect(bx - 5, by - 5, 10, 10);
  visited[bx/100 + (8*by/100)]++;
  this.bx1 = bx;
  this.by1 = by;
  this.controlx = control1x;
  this.controly = control1y;
  this.ax1 = ax;
  this.ay1 = ay;
  
  this.zwrocStartX = function()
  {
    return this.ax1;
  }
  this.zwrocStartY = function()
  {
    return this.ay1;
  }
  this.zwrocX = function() {    
    return this.bx1;
  }
  this.zwrocY = function() {
    return this.by1;
  }
  this.zwrocXKontrolny = function() {
    return this.controlx;
  }
  this.zwrocYKontrolny = function() {
    return this.controlx;
  }
  console.log("GENERUJ DROGE: " + ax + "," + ay + "," + control1x + "," + control1y + "," + bx + "," + by);

  this.opisz_wchodzace = function()
  {
    switch(this.kierunek)
    {
      case "north":
        textarea.value += " południe";
        break;
      case "south":
        textarea.value += " północ";
        break;
      case "east":
        textarea.value += " zachód";
        break;
      case "west":
        textarea.value += " wschód";
        break;
      case "north-west":
        textarea.value += " południowy wschód";
        break;
      case "north-east":
        textarea.value += " południowy zachód";
        break;
      case "south-west":
        textarea.value += " północny wschód";
        break;
      case "south-east":
        textarea.value += " północny zachód";
        break;
    };
  }
  this.opisz_ruchy = function()
  {
    switch(this.kierunek)
    {
      case "north":
        textarea.value += " północ";
        break;
      case "south":
        textarea.value += " południe";
        break;
      case "east":
        textarea.value += " wschód";
        break;
      case "west":
        textarea.value += " zachód";
        break;
      case "north-west":
        textarea.value += " północny zachód";
        break;
      case "north-east":
        textarea.value += " północny wschód";
        break;
      case "south-west":
        textarea.value += " południowy zachód";
        break;
      case "south-east":
        textarea.value += " południowy wschód";
        break;
    };
  }
  this.wybierz = function()
  {
    textarea.value += "Idziemy na";
    switch(this.kierunek)
    {
      case "north":
        textarea.value += " północ";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku zachodnim.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku wschodnim.\n";
        }
        break;
      case "south":
        textarea.value += " południe";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku zachodnim.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku wschodnim.\n";
        }
        break;
      case "east":
        textarea.value += " wschód";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku północnym.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku południowym.\n";
        }
        break;
      case "west":
        textarea.value += " zachód";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku północnym.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku południowym.\n";
        }
        break;
      case "north-west":
        textarea.value += " północny zachód";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku południowo-zachodnim.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku północno-wschodnim.\n";
        }
        break;
      case "north-east":
        textarea.value += " północny wschód";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku północno-zachodnim.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku południowo-wschodnim.\n";
        }
        break;
      case "south-west":
        textarea.value += " południowy zachód";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku północno-zachodnim.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku południowo-wschodnim.\n";
        }
        break;
      case "south-east":
        textarea.value += " południowy wschód";
        if(this.arcType == 1)
        {
          textarea.value += " po łuku wygiętym w kierunku północno-wschodnim.\n";
        }
        else if(this.arcType == 2)
        {
          textarea.value += " prosto.\n";
        }
        else
        {
          textarea.value += " po łuku wygiętym w kierunku południowo-zachodnim.\n";
        }
        break;
    };
  }
}

function punkt(ax1,ay1) {
  this.ax1 = ax1;
  this.ay1 = ay1;
  this.drogi = [];
  this.skrzyz = [];
  this.obiekty = [];
  this.dodajObiekt = function(idObiektu) {
    this.obiekty[this.obiekty.length] = idObiektu;
  }
  this.dodajSkrzyz = function(idSkrzyz) {
    this.skrzyz[this.skrzyz.length] = idSkrzyz;
  }
  this.dodajDroge = function(idDrogi, wychodzaca) {
    this.drogi[this.drogi.length] = [idDrogi, wychodzaca];
  }
  this.ax = function() {
        return this.ax1;
    };
    this.ay = function() {
        return this.ay1;
    };
  console.log("PUNKT: " + this.ax1 + "," + this.ay1);
  this.generuj_opis = function()
  {
    for(j = 0; j < punkty.length; j++)
    {
      for(k = 0; k < this.drogi.length; k++)
      {
        for(l = 0; l < punkty[j].drogi.length; l++)
        {
          if(punkty[j].drogi[l][1] == 2 && punkty[j].drogi[l][0] == this.drogi[k][0] && this.drogi[k][1] == 1)
          {
            this.drogi[k][1] = 2;
          }
        }
      }
    }
    textarea.value += "Możemy iść na";
    var nastepnaDroga = -1;
    for(j = 0; j < this.skrzyz.length; j++)
    {
      for(k = 0; k < this.drogi.length; k++)
      {
        if(ruchy[this.drogi[k][0]].kierunek == skrzyzowania[this.skrzyz[j]].direction && this.drogi[k][1] == 1)
        {
          delete this.skrzyz[j];
          break;
        }
      }
    }
    for(j = 0; j < this.skrzyz.length; j++)
    {
      if(typeof this.skrzyz[j] === "undefined")
      {
        this.skrzyz.splice(j, 1);
        j--;
      }
    }
  
    for(j = 0; j < this.drogi.length; j++)
    {
      if(this.drogi[j][1] == 1 && nastepnaDroga == -1)
      {
        nastepnaDroga = j;
        this.drogi[nastepnaDroga][1] = 2;
      }
      if(this.drogi[j][1] == 1 || this.drogi[j][1] == 2)
      {
        ruchy[this.drogi[j][0]].opisz_ruchy();
      }
      else
      {
        ruchy[this.drogi[j][0]].opisz_wchodzace();
      }
      if(this.skrzyz.length != 0 || j != this.drogi.length - 1)
      {
        textarea.value += ",";
      }
    }
    if(this.skrzyz.length > 0)
    {
        textarea.value += " oraz";
    }
    for(j = 0; j < this.skrzyz.length; j++)
    {
      if(!(typeof this.skrzyz[j] === "undefined"))
      {
        skrzyzowania[this.skrzyz[j]].opisz_skrzyzowania();
        if(j != this.skrzyz.length - 1 && !(typeof this.skrzyz[j + 1] === "undefined"))
        {
          textarea.value += ",";
        }
      }
    }
    textarea.value += ".\n";
    for(j = 0; j < this.obiekty.length; j++)
    {
      obiekty[this.obiekty[j]].opisz_obiekty();
    }
    if(nastepnaDroga != -1)
    {
      ruchy[this.drogi[nastepnaDroga][0]].wybierz();
    }
    else
    {
      textarea.value += "Jesteśmy u celu.";
    }
  }
}

function generuj_kierunek(i) {
  var rand;
  var tempX;
  var tempY;
  var counter = 0;
  var width = document.getElementById('map').offsetWidth-100;
  var height = document.getElementById('map').offsetHeight-100;
  while(true)
  { 
    counter++;
    rand = Math.floor((Math.random() * 8) + 1);
    switch(rand)
    {
      case 1:
        if(punkty[i].ay() > 100 && kierunki.length < 1) 
        {
          this.kierunek = "north";
          tempX = (punkty[i].ax())/100;
          tempY = (punkty[i].ay() - 100)/100;
        }
        else if(punkty[i].ay() > 100 && kierunki[kierunki.length - 1].zwroc_kierunek() != "south")
        {
          this.kierunek = "north";
          tempX = (punkty[i].ax())/100;
          tempY = (punkty[i].ay() - 100)/100;
        }
      break; 
      case 2:
        if(punkty[i].ay() < height && kierunki.length < 1) 
        {
          this.kierunek = "south";
          tempX = (punkty[i].ax())/100;
          tempY = (punkty[i].ay() + 100)/100;
        }
        else if(punkty[i].ay() < height && kierunki[kierunki.length - 1].zwroc_kierunek() != "north")
        {
          this.kierunek = "south";
          tempX = (punkty[i].ax())/100;
          tempY = (punkty[i].ay() + 100)/100;
        }
      break;
      case 3:
        if(punkty[i].ax() < width && kierunki.length < 1)
        {
          this.kierunek = "east";
          tempX = (punkty[i].ax() + 100)/100;
          tempY = (punkty[i].ay())/100;
        }
        else if(punkty[i].ax() < width && kierunki[kierunki.length - 1].zwroc_kierunek() != "west")
        {
          this.kierunek = "east";
        }
        tempX = (punkty[i].ax() + 100)/100;
        tempY = (punkty[i].ay())/100;
      break;
      case 4: 
        if(punkty[i].ax() > 100 && kierunki.length < 1)
        {
          this.kierunek = "west";
        }
        else if(punkty[i].ax() > 100 && kierunki[kierunki.length - 1].zwroc_kierunek() != "east")
        {
          this.kierunek = "west";
        }
        tempX = (punkty[i].ax() - 100)/100;
        tempY = (punkty[i].ay())/100;
      break;
      case 5:
        if(punkty[i].ay() > 100 && punkty[i].ax() > 100 && kierunki.length < 1)
        {
          this.kierunek = "north-west";
        }
        else if(punkty[i].ay() > 100 && punkty[i].ax() > 100 && kierunki[kierunki.length - 1].zwroc_kierunek() != "south-east")
        {
          this.kierunek = "north-west";
        }
        tempX = (punkty[i].ax() - 100)/100;
        tempY = (punkty[i].ay() - 100)/100;
      break;
      case 6:
        if(punkty[i].ay() > 100 && punkty[i].ax() < width && kierunki.length < 1)
        {
          this.kierunek = "north-east";
          tempX = (punkty[i].ax() + 100)/100;
          tempY = (punkty[i].ay() - 100)/100;
        }
        else if(punkty[i].ay() > 100 && punkty[i].ax() < width && kierunki[kierunki.length - 1].zwroc_kierunek() != "south-west")
        {
          this.kierunek = "north-east";
          tempX = (punkty[i].ax() + 100)/100;
          tempY = (punkty[i].ay() - 100)/100;
        }
      break;
      case 7:
        if(punkty[i].ay() < height && punkty[i].ax() > 100 && kierunki.length < 1)
        {
          this.kierunek = "south-west";
        }
        else if(punkty[i].ay() < height && punkty[i].ax() > 100 && kierunki[kierunki.length - 1].zwroc_kierunek() != "north-east")
        {
          this.kierunek = "south-west";
        }
        tempX = (punkty[i].ax() - 100)/100;
        tempY = (punkty[i].ay() + 100)/100;
      break;
      case 8:
        if(punkty[i].ay() < height && punkty[i].ax() < width && kierunki.length < 1)
        {
          this.kierunek = "south-east";
        }
        else if(punkty[i].ay() < height && punkty[i].ax() < width && kierunki[kierunki.length - 1].zwroc_kierunek() != "north-west")
        {
          this.kierunek = "south-east"; 
        }
      tempX = (punkty[i].ax() + 100)/100;
      tempY = (punkty[i].ay() + 100)/100;
      break;
    }
    if((this.kierunek && visited[tempX + 8*tempY] > 0 && counter > 20) || (this.kierunek && visited[tempX + 8*tempY] <= 0))
      break;
  } 
  this.zwroc_kierunek = function() {
        return this.kierunek;
    };
  console.log("Kierunek: " + this.kierunek + ", " + tempX + ", " + tempY);
}

function generuj_skrzyzowania(i) {
  this.punktX = punkty[i].ax();
  this.punktY = punkty[i].ay();
  this.punktID= i;
  this.direction = dostepneKierunki[random(0,7)];
  
  switch(this.direction)
  {
    case "north":
      ctx.moveTo(this.punktX, this.punktY - 15);
      ctx.lineTo(this.punktX, this.punktY);
    break;
    case "south":
      ctx.moveTo(this.punktX, this.punktY + 15);
      ctx.lineTo(this.punktX, this.punktY);
    break;
    case "east":
      ctx.moveTo(this.punktX + 15, this.punktY);
      ctx.lineTo(this.punktX, this.punktY);
    break;
    case "west":
      ctx.moveTo(this.punktX - 15, this.punktY);
      ctx.lineTo(this.punktX, this.punktY);
    break;
    case "north-west":
      ctx.moveTo(this.punktX - 15, this.punktY - 15);
      ctx.lineTo(this.punktX, this.punktY);
    break;
    case "north-east":
      ctx.moveTo(this.punktX + 15, this.punktY - 15);
      ctx.lineTo(this.punktX, this.punktY);
    break;
    case "south-west":
      ctx.moveTo(this.punktX - 15, this.punktY + 15);
      ctx.lineTo(this.punktX, this.punktY);
    break;
    case "south-east":
      ctx.moveTo(this.punktX + 15, this.punktY + 15);
      ctx.lineTo(this.punktX, this.punktY);
    break;
  }
  punkty[i].dodajSkrzyz(skrzyzowania.length);
  
  this.opisz_skrzyzowania = function()
  {
    switch(this.direction)
    {
      case "north":
        textarea.value += " północ";
      break;
      case "south":
        textarea.value += " południe";
      break;
      case "east":
        textarea.value += " wschód";
      break;
      case "west":
        textarea.value += " zachód";
      break;
      case "north-west":
        textarea.value += " północny zachód";
      break;
      case "north-east":
        textarea.value += " północny wschód";
      break;
      case "south-west":
        textarea.value += " południowy zachód";
      break;
      case "south-east":
        textarea.value += " południowy wschód";
      break;
    };
  }
}

function generuj_obiekty(i) {
  var slotOccupiedByAnotherObj = 0;
  while(true)
  {
    slotOccupiedByAnotherObj = 0;
    this.direction = random(1,8);
    switch(this.direction)
    {
      case 1:
        this.posX = punkty[i].ax() - 10;
        this.posY = punkty[i].ay() - 35;
      break;
      case 2:
        this.posX = punkty[i].ax() + 15;
        this.posY = punkty[i].ay() - 35;
      break;
      case 3:
        this.posX = punkty[i].ax() + 15;
        this.posY = punkty[i].ay() - 10;
      break;
      case 4:
        this.posX = punkty[i].ax() + 15;
        this.posY = punkty[i].ay() + 15;
      break;
      case 5:
        this.posX = punkty[i].ax() - 10;
        this.posY = punkty[i].ay() + 15;
      break;
      case 6:
        this.posX = punkty[i].ax() - 35;
        this.posY = punkty[i].ay() + 15;
      break;
      case 7:
        this.posX = punkty[i].ax() - 35;
        this.posY = punkty[i].ay() - 10;
      break;
      case 8:
        this.posX = punkty[i].ax() - 35;
        this.posY = punkty[i].ay() - 35;
      break;
    };
    
    for(j = 0; j < punkty[i].obiekty.length; j++)
    {
      if(obiekty[punkty[i].obiekty[j]].getX() == this.posX && obiekty[punkty[i].obiekty[j]].getY() == this.posY)
      {
        slotOccupiedByAnotherObj = 1;
      }
    }
    if(!slotOccupiedByAnotherObj)
    {
      break;
    }
  }
  this.type = random(0, availableStructures.length - 1);
  this.subtype = random(0,availableStructures[0].length - 1);
  punkty[i].dodajObiekt(obiekty.length);
  var x = this.posX;
  var y = this.posY;
  var img = new Image();
  img.onload = function() { ctx.drawImage(img, x, y, 20, 20); }
  img.src = availableStructures[this.type][this.subtype];

  this.getY = function() {
    return this.posY;
  }
  this.getX = function() {
    return this.posX;
  }
  this.opisz_obiekty = function()
  {
    textarea.value += "Na ";
    switch(this.direction)
    {
      case 1:
        textarea.value += "północy ";
      break;
      case 2:
        textarea.value += "północnym wschodzie ";
      break;
      case 3:
        textarea.value += "wschodzie ";
      break;
      case 4:
        textarea.value += "południowym wschodzie ";
      break;
      case 5:
        textarea.value += "południu ";
      break;
      case 6:
        textarea.value += "południowym zachodzie ";
      break;
      case 7:
        textarea.value += "zachodzie ";
      break;
      case 8:
        textarea.value += "północnym zachodzie ";
      break;
    };
    textarea.value += "widzimy ";
    switch(this.type)
    {
      case 0:
        textarea.value += "dom koloru ";
        if(this.subtype == 0)
        {
          textarea.value += "białego.\n";
        }
        else if(this.subtype == 1)
        {
          textarea.value += "żółtego.\n";
        }
        else
        {
          textarea.value += "zielonego.\n";
        }
        break;
      case 1:
        textarea.value += "drzewo gatunku ";
        if(this.subtype == 0)
        {
          textarea.value += "buk.\n";
        }
        else if(this.subtype == 1)
        {
          textarea.value += "brzoza.\n";
        }
        else
        {
          textarea.value += "świerk.\n";
        }
        break;
      case 2:
        textarea.value += "flagę koloru ";
        if(this.subtype == 0)
        {
          textarea.value += "czerwonego.\n";
        }
        else if(this.subtype == 1)
        {
          textarea.value += "niebieskiego.\n";
        }
        else
        {
          textarea.value += "zielonego.\n";
        }
        break;
      case 3:
        textarea.value += "skrzynię koloru ";
        if(this.subtype == 0)
        {
          textarea.value += "czarnego.\n";
        }
        else if(this.subtype == 1)
        {
          textarea.value += "brązowego.\n";
        }
        else
        {
          textarea.value += "niebieskiego.\n";
        }
        break;
      case 4:
        textarea.value += "wiatrak koloru ";
        if(this.subtype == 0)
        {
          textarea.value += "brązowego.\n";
        }
        else if(this.subtype == 1)
        {
          textarea.value += "niebieskiego.\n";
        }
        else
        {
          textarea.value += "pomarańczowego.\n";
        }
        break;
      case 5:
        textarea.value += "znak koloru ";
        if(this.subtype == 0)
        {
          textarea.value += "czerwonego.\n";
        }
        else if(this.subtype == 1)
        {
          textarea.value += "niebieskiego.\n";
        }
        else
        {
          textarea.value += "żółtego.\n";
        }
        break;
    }
  }
}
function odrysowany(x, y, typ, podtyp)
{
  this.x = x;
  this.y = y;
  this.typ = typ;
  this.podtyp = podtyp;
  
  var img = new Image();
  img.onload = function()
  {
    ctx2.drawImage(img, x, y, 20, 20);
  }
  img.src = availableStructures[this.typ][this.podtyp];
}


function parse()
{
  var string = textarea.value.split("\n");
  for(i = 0; i < string.length; i++)
  {
    var zdanie = string[i].split(" ");
    var kierunek;
    var łuk;
    var bx, by, controlx, controly;
    var typ;
    var podtyp;
    switch(zdanie[0])
    {
      case "Punkt":
        zdanie[3] = zdanie[3].substr(0, 3);
        zdanie[4] = zdanie[4].substr(0, 3);
        ctx2.moveTo(zdanie[3], zdanie[4]);
        ctx2.fillRect(zdanie[3] - 5, zdanie[4] - 5, 10, 10);
        var coordX = parseInt(zdanie[3]);
        var coordY = parseInt(zdanie[4]);
        break;
      case "Na":
        zdanie[zdanie.length - 1] = zdanie[zdanie.length - 1].substr(0, zdanie[zdanie.length - 1].length - 1);
        if(zdanie[2] == "widzimy")
        {
          kierunek = zdanie[1];
          typ = zdanie[3];
        }
        else
        {
          kierunek = zdanie[1] + " " + zdanie[2];
          typ = zdanie[4];
        }
        podtyp = zdanie[zdanie.length - 1];
        
        switch(kierunek)
        {
          case "północy":
            bx = coordX - 10;
            by = coordY - 35;
            break;
          case "południu":
            bx = coordX - 10;
            by = coordY + 15;
            break;
          case "zachodzie":
            bx = coordX - 35;
            by = coordY - 10;
            break;
          case "wschodzie":
            bx = coordX + 15;
            by = coordY - 10;
            break;
          case "północnym zachodzie":
            bx = coordX - 35;
            by = coordY - 35;
            break;
          case "północnym wschodzie":
            bx = coordX + 15;
            by = coordY - 35;
            break;
          case "południowym zachodzie":
            bx = coordX - 35;
            by = coordY + 15;
            break;
          case "południowym wschodzie":
            bx = coordX + 15;
            by = coordY + 15;
            break;
        };
        switch(typ)
        {
          case "dom":
            typ = 0;
            if(podtyp == "białego")
            {
              podtyp = 0;
            }
            else if(podtyp == "żółtego")
            {
              podtyp = 1;
            }
            else
            {
              podtyp = 2;
            }
            break;
          case "drzewo":
            typ = 1;
            if(podtyp == "buk")
            {
              podtyp = 0;
            }
            else if(podtyp == "brzoza")
            {
              podtyp = 1;
            }
            else
            {
              podtyp = 2;
            }
            break;
          case "flagę":
            typ = 2;
            if(podtyp == "czerwonego")
            {
              podtyp = 0;
            }
            else if(podtyp == "niebieskiego")
            {
              podtyp = 1;
            }
            else
            {
              podtyp = 2;
            }
            break;
          case "skrzynię":
            typ = 3;
            if(podtyp == "czarnego")
            {
              podtyp = 0;
            }
            else if(podtyp == "brązowego")
            {
              podtyp = 1;
            }
            else
            {
              podtyp = 2;
            }
            break;
          case "wiatrak":
            typ = 4;
            if(podtyp == "brązowego")
            {
              podtyp = 0;
            }
            else if(podtyp == "niebieskiego")
            {
              podtyp = 1;
            }
            else
            {
              podtyp = 2;
            }
            break;
          case "znak":
            typ = 5;
            if(podtyp == "czerwonego")
            {
              podtyp = 0;
            }
            else if(podtyp == "niebieskiego")
            {
              podtyp = 1;
            }
            else
            {
              podtyp = 2;
            }
            break;
        };
        odrysowane[odrysowane.length] = new odrysowany(bx, by, typ, podtyp);
        
        break;
      case "Idziemy":
        zdanie[zdanie.length - 1] = zdanie[zdanie.length - 1].substr(0, zdanie[zdanie.length - 1].length - 1);
        if(zdanie[3] == "po" || zdanie[3] == "prosto")
        {
          kierunek = zdanie[2];
        }
        else
        {
          kierunek = zdanie[2] + " " + zdanie[3];
        }
        łuk = zdanie[zdanie.length - 1];
        switch(kierunek)
        {
        case "północ":
          if(łuk == "zachodnim")
          {
            controlx = coordX - 50;
            controly = coordY - 50;
            bx = coordX;
            by = coordY - 100;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX;
            controly = coordY - 50;
            bx = coordX;
            by = coordY - 100;
          }
          else
          {
            controlx = coordX + 50;
            controly = coordY - 50;
            bx = coordX;
            by = coordY - 100;
          }
          break;
        case "południe":
          if(łuk == "zachodnim")
          {
            controlx = coordX - 50;
            controly = coordY + 50;
            bx = coordX;
            by = coordY + 100;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX;
            controly = coordY + 50;
            bx = coordX;
            by = coordY + 100;
          }
          else
          {
            controlx = coordX + 50;
            controly = coordY + 50;
            bx = coordX;
            by = coordY + 100;
          }
          break;
        case "wschód":
          if(łuk == "północnym")
          {
            controlx = coordX + 50;
            controly = coordY - 50;
            bx = coordX + 100;
            by = coordY;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX + 50;
            controly = coordY;
            bx = coordX + 100;
            by = coordY;
          }
          else
          {
            controlx = coordX + 50;
            controly = coordY + 50;
            bx = coordX + 100;
            by = coordY;
          }
          break;
        case "zachód":
          if(łuk == "północnym")
          {
            controlx = coordX - 50;
            controly = coordY - 50;
            bx = coordX - 100;
            by = coordY;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX - 50;
            controly = coordY;
            bx = coordX - 100;
            by = coordY;
          }
          else
          {
            controlx = coordX - 50;
            controly = coordY + 50;
            bx = coordX - 100;
            by = coordY;
          }
          break;
        case "północny zachód":
          if(łuk == "południowo-zachodnim")
          {
            controlx = coordX - 100;
            controly = coordY;
            bx = coordX - 100;
            by = coordY - 100;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX - 50;
            controly = coordY - 50;
            bx = coordX - 100;
            by = coordY - 100;
          }
          else
          {
            controlx = coordX;
            controly = coordY - 100;
            bx = coordX - 100;
            by = coordY - 100;
          }
          break;
        case "północny wschód":
          if(łuk == "północno-zachodnim")
          {
            controlx = coordX;
            controly = coordY - 100;
            bx = coordX + 100;
            by = coordY - 100;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX + 50;
            controly = coordY - 50;
            bx = coordX + 100;
            by = coordY - 100;
          }
          else
          {
            controlx = coordX + 100;
            controly = coordY;
            bx = coordX + 100;
            by = coordY - 100;
          }
          break;
        case "południowy zachód":
          if(łuk == "północno-zachodnim")
          {
            controlx = coordX - 100;
            controly = coordY;
            bx = coordX - 100;
            by = coordY + 100;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX - 50;
            controly = coordY + 50;
            bx = coordX - 100;
            by = coordY + 100;
          }
          else
          {
            controlx = coordX;
            controly = coordY + 100;
            bx = coordX - 100;
            by = coordY + 100;
          }
          break;
        case "południowy wschód":
          if(łuk == "północno-wschodnim")
          {
            controlx = coordX + 100;
            controly = coordY;
            bx = coordX + 100;
            by = coordY + 100;
          }
          else if(łuk == "prosto")
          {
            controlx = coordX + 50;
            controly = coordY + 50;
            bx = coordX + 100;
            by = coordY + 100;
          }
          else
          {
            controlx = coordX;
            controly = coordY + 100;
            bx = coordX + 100;
            by = coordY + 100;
          }
          break;
        };
        ctx2.quadraticCurveTo(controlx, controly, bx, by);
        ctx2.fillRect(bx - 5, by - 5, 10, 10);
        ctx2.stroke();
        coordX = bx;
        coordY = by;
        break;
      case "Możemy":
        string[i] = string[i].substr(14, string[i].length - 2);
        kierunek = string[i].split(",");
        var losoweSkrzyzowania = 0;
        for(j = 0; j < kierunek.length; j++)
        {
          if(kierunek[j].substr(0, 5) == " oraz")
          {
            losoweSkrzyzowania = 1;
            kierunek[j] = kierunek[j].substr(6, kierunek[j].length - 1);
          }
          if(kierunek[j][kierunek[j].length - 1] == "," || kierunek[j][kierunek[j].length - 1] == ".")
          {
            kierunek[j] = kierunek[j].substr(0, kierunek[j].length - 1);
          }
          if(kierunek[j][0] == " ")
          {
            kierunek[j] = kierunek[j].substr(1, kierunek[j].length);
          }
          if(losoweSkrzyzowania)
          {
            switch(kierunek[j])
            {
              case "północ":
                ctx2.moveTo(coordX, coordY - 15);
                ctx2.lineTo(coordX, coordY);
                break;
              case "południe":
                ctx2.moveTo(coordX, coordY + 15);
                ctx2.lineTo(coordX, coordY);
                break;
              case "zachód":
                ctx2.moveTo(coordX - 15, coordY);
                ctx2.lineTo(coordX, coordY);
                break;
              case "wschód":
                ctx2.moveTo(coordX + 15, coordY);
                ctx2.lineTo(coordX, coordY);
                break;
              case "północny wschód":
                ctx2.moveTo(coordX + 15, coordY - 15);
                ctx2.lineTo(coordX, coordY);
                break;
              case "południowy wschód":
                ctx2.moveTo(coordX + 15, coordY + 15);
                ctx2.lineTo(coordX, coordY);
                break;
              case "południowy zachód":
                ctx2.moveTo(coordX - 15, coordY + 15);
                ctx2.lineTo(coordX, coordY);
                break;
              case "północny zachód":
                ctx2.moveTo(coordX - 15, coordY - 15);
                ctx2.lineTo(coordX, coordY);
                break;
            };
            ctx2.stroke();
          }
        }
        
        break;
    }
  }
}
function wyczysc()
{
  for(i = 0; i < 64; i++) {
    visited[i] = 0;
  }
  ctx.clearRect(0, 0, map.width, map.height);
  ruchy.splice(0, ruchy.length);
  kierunki.splice(0, kierunki.length);
  obiekty.splice(0, obiekty.length);
  skrzyzowania.splice(0, skrzyzowania.length);
  punkty.splice(0, punkty.length);
}
function wyczysc_parse()
{
  odrysowane.splice(0, odrysowane.length);
  ctx2.clearRect(0, 0, map.width, map.height); 
}
function wyczysc_opis()
{
  textarea.value = "";
}
function random(a, b)
{
  return Math.round(Math.random() * Math.abs(b - a) + a);
}
var c=document.getElementById("map");
var ctx=c.getContext("2d");
var textarea = document.getElementById("opis");
var c2=c;
var ctx2=c2.getContext("2d");

var odrysowane = [];  
var ruchy = [];
var kierunki = [];
var punkty = [];
var skrzyzowania = [];
var obiekty = [];

var z_eksportu = 0;

var visited = [];
for(i = 0; i < 64; i++) {
  visited[i] = 0;
}
function rysuj()
{
  z_eksportu = 0;
  var ran_width = (document.getElementById('map').offsetWidth-100)/100;
  var ran_height = (document.getElementById('map').offsetHeight-100)/100;
  var dlugoscTrasy = random(15,20);
  var startX = 100*random(1,ran_width);
  var startY = 100*random(1,ran_height);
  wyczysc();
  wyczysc_parse();
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.fillRect(startX - 5, startY - 5, 10, 10);
  visited[startX/100 + 8*startY/100]++;
  punkty[punkty.length] = new punkt(startX, startY);
  for(i = 0; i < dlugoscTrasy; i++) {
    kierunki[kierunki.length] = new generuj_kierunek(punkty.length - 1);
    ruchy[ruchy.length] = new generuj_droge(punkty[punkty.length - 1].ax(), punkty[punkty.length - 1].ay());
    punkty[punkty.length] = new punkt(ruchy[ruchy.length - 1].zwrocX(), ruchy[ruchy.length - 1].zwrocY());
  }
  ctx.stroke();
  for(i = 0; i < random(8,16); i++)
  {
    skrzyzowania[skrzyzowania.length] = new generuj_skrzyzowania(random(1, punkty.length - 2));
  }

  for(i = 0; i < random(10,15); i++)
  {
    obiekty[obiekty.length] = new generuj_obiekty(random(0, punkty.length - 1));
  }
  ctx.stroke();
  for(i = 0; i < ruchy.length; i++)
  {
    for(j = 0; j < punkty.length; j++)
    {
      if(ruchy[i].zwrocStartX() == punkty[j].ax() && ruchy[i].zwrocStartY() == punkty[j].ay())
      {
        punkty[j].dodajDroge(i, 1);
      } 
      else if (ruchy[i].zwrocX() == punkty[j].ax() && ruchy[i].zwrocY() == punkty[j].ay())
      {
        punkty[j].dodajDroge(i, 0);
      }
    }
  }
}
function opisz()
{
  if(z_eksportu == 0) {
    wyczysc_opis();
    textarea.value += "Punkt startowy to: " + punkty[0].ax() + ", " + punkty[0].ay() + ".\n"; 
    for(i = 0; i < punkty.length; i++)
    {
      punkty[i].generuj_opis();
    }
  }
}

function przerysuj()
{
  z_eksportu = 1;
  wyczysc();
  wyczysc_parse();
  ctx2.beginPath();
  parse();
}

var availableStructures = [
    ["img/DomBial.png", 
    "img/DomZol.png",
    "img/DomZiel.png"],
    ["img/Drzewo.png",
    "img/DrzewoBrz.png",
    "img/DrzewoSwierk.png"],
    ["img/FlagaCzer.png",
    "img/FlagaNieb.png",
    "img/FlagaZiel.png"],
    ["img/SkrzyniaCzar.png",
    "img/SkrzyniaBr.png",
    "img/SkrzyniaNieb.png"],
    ["img/WiatrakBraz.png",
    "img/WiatrakNieb.png",
    "img/WiatrakPom.png"],
    ["img/ZnakCzerw.png",
    "img/ZnakNieb.png",
    "img/ZnakZol.png"]
];

var dostepneKierunki = 
[
  "north",
  "south",
  "east",
  "west",
  "north-west",
  "north-east",
  "south-west",
  "south-east"
];