# React İsim Seçici

Bu projede, isim seçiciden bir isim seçeceksiniz. Devlet ve sahne kullanacaksınız. Başlayalım!
Önce bu “src” klasörünü çalışan bir tepki yoluna koyun ve uygulamanızı çalıştırın.

Hedefleriniz;

• Bir isim seçtiğinizde, seçtiğiniz isim sayfada belirir,

App.js dosyanızda; bir yapıcı yöntemi oluşturun ve ad adında bir durum oluşturun. Bu isme bir dize verin. örnek: "Cornelius".

Adınızı Ad bileşenine gönderin.

Name.js dosyanızda noktalar yerine adı kullanın.

App.js dosyanızda; bir parametre ile bir changeName() yöntemi oluşturun. Bu, verilen parametreye göre adın durumunu ayarlar.

Bu yöntemi Select bileşenine gönderin.

Select.js dosyanızda bir yapıcı yöntemi (bağlama için) oluşturun ve bir handleChange() yöntemi oluşturun.

Bu yöntem, seçilen seçenek değerini almalı ve onu changeName(); işlevini çağırmak için bir argüman olarak kullanmalıdır;

`<select>` öğesinin içinde Bir onChange niteliği oluşturun ve içindeki bu handleChange() yöntemini çağırın.

Tebrikler!

Ek adımlar:

• Seçicinin name.js dosyasından ad almasını sağlayın. (Birçok isim kullanabilirsiniz)
• Bir isim seçtikten sonra, DOM'da Wish.js dosyasından bir alıntı görüntüleyin.

Meydan okumak:

• Seçicinin API'den ad almasını sağlayın (https://jsonplaceholder.typicode.com). (Ayrıca bu API'den alıntılar)

---

# React Name Picker

In this project, you’ll
choose a name from name picker. You will use state and props.

Let’s get started!

First put this “src”
folder to a working react path and run your application.

Your goals are;

·
When you select a name, your chosen name appear on the page,

**1.**

In your App.js file; create a construtor method and create a state named name. Give
this name a string. example: “Cornelius”.

**2.**

Send your name to the Name component.

**3.**

Use name in your Name.js file instead of dots.

**4.**

In your App.js file; create a changeName()
method with one parameter. That sets the state of name according to given
parameter.

**5.**

Send this method to the Select component.

**6.**

In your Select.js file create a constructor
method (for binding) and create a handleChange()
method.

**7.**

This method should take the selected option value and use it as an argument to call
the changeName();

**8.**

Inside `<select>` element Create an onChange attribute and call this handleChange() method in it.

Congragulations!

**Additional steps:**

·
Make the selector take names from names.js file. (You can use
lots of names)

·
After you select a name display a quote from wishes.js file in
to the DOM.

**Challenge:**

·
Make the selector take names from API (https://jsonplaceholder.typicode.com).
(And also quotes from this api)
