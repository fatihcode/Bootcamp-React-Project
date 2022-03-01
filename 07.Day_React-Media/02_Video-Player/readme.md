# React Video Oynatıcı

Bu projede, seçilen videolardan bir video oynatıcı oluşturacaksınız. State ve props kullanacaksınız.

Önce bu “src” klasörünü çalışan bir react yoluna koyun ve uygulamanızı çalıştırın.
1.
App.js dosyanızda; video kaynağı için bir durum oluşturun, şimdi boş bir dize verin.

Bu durumu `<h1>` öğesinin altındaki Video bileşenine (daha sonra oluşturacağınız) gönderin.

App.js dosyanızda; Seçilen video kaynağıyla durum kaynağını değiştirmek için bir selectVideo() yöntemi oluşturun. Parametre olarak kaynak almalıdır.

Bu yöntemi `<h1>` altındaki ve Video bileşeninin üstündeki Menü bileşenine (daha sonra oluşturacağınız) gönderin.

Şimdi, seçilen durum kaynağının kaynağıyla (App.js'den gelen) bir `<video>` öğesi döndüren bir Video bileşeni (Video.js dosyası içinde) oluşturun.

Şimdi, dört "radio" `<input>` içeren bir `<form>` öğesi döndüren bir Menu bileşeni (Menu.js dosyası içinde) oluşturun; her girdi, "hızlı", "yavaş", "sevimli" ve "eek" değerlerinden birine sahiptir.

Menü bileşeninizde; seçilen girişin değeriyle (Uygulamadan gelen) selectVideo() yöntemini çağırın.

Tebrikler!

---

# React Video Player

In this project, you’ll create a video player from selected videos. You will use state and props.

First put this “src”folder to a working react path and run your application.

**1.**

In your App.js file; create a state for video source, give an empty string now.

**2.**

Send this state to the Video component (you will create later) below `<h1>` element.

**3.**

In your App.js file; Create a method chooseVideo() for changing the state source with the selected video source. It should take source as a parameter.

**4.**

Send this method to the Menu component (you will create later) below `<h1>` and above Video component.

**5.**

Now create a Video component (inside Video.js file) that returns a `<video> ` element with the source of selected state source (coming from App.js).

**6.**

Now create a Menu component (inside Menu.js file) that returns a `<form>` element with four “radio” `<input>`; each input has the value one of these: “fast”, “slow”, “cute” and “eek”.

**7.**

In your Menu component; call chooseVideo() method (coming from App) with the value of selected input.

Congragulations!
