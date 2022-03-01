Kullanıcı Ekle Tepki Ver

Bu Projede, giriş alanlarıyla listeye yeni bir kullanıcı ekleyeceksiniz.
Başlayalım!

Halihazırda çalışan bir React yolunuz varsa (veya yeni bir tane oluşturduysanız):
Orijinal “src” klasörünüzü Projenin “src” ile değiştirin ve uygulamanızı çalıştırın: npm start

Hedefleriniz;
• İsim yazıp butonuna bastığınızda, bu isim isim listesinin en altında görünür,

ADIMLAR:

App.js dosyanızda; durum kullanıcılarınızı Tablo bileşenine gönderin.

Table.js dosyanızda, bu adları ve işleri DOM'a yazdırın. Tablo bileşeninin yapısını değiştirmeyin. (Kullanıcılarınızı TableBody'ye göndermelisiniz. Ardından, kullanıcılarınızı haritalandırmanız gerekir)

Form.js dosyanızda, girilen isme ve işe göre (giriş yoluyla) iki durum değeri oluşturun. Giriş onchange işleyicisi ile durumları değiştiren ve çağıran bir yöntem oluşturabilirsiniz. Veya input onchange işleyicisi içindeki durumları doğrudan değiştirebilirsiniz.

`<form>` öğesinin altındaki `<h2>` öğesine durum değerlerini yazın.

App.js dosyanızda; yeni kullanıcılar eklemek için bir updateNames() yöntemi oluşturun.
Test için; bir buton oluşturun ve bu metodu onclick bu butondan çağırın. (el ile yeni değerler verin ve sonucu görün)

Son olarak yeni kullanıcılar eklemek için bir parametre verin. Bu yöntemi Form bileşenine gönderin.

Form.js bileşeninizde bir handleSubmit() yöntemi oluşturun ve updateNames() yönteminin yardımıyla formu göndererek durumunuzu App bileşenine gönderin.

Her şey yolundaysa; Uygulama bileşeninde updateNames() yöntemi, kullanıcı durumunuzu güncelleyecektir.

en sonunda; butonuna tıkladığınızda, girdiğiniz ismi isim listesi altında görmelisiniz.

Tebrikler!

Meydan okumak
Adlar için bir silme düğmesi oluşturun ve adları durumdan silin.

---

**React Add User**

In this Project you will add a new user by input fields to the list.

Let’s get started!

**If you have a working React path already (or you just created a new one):**

Change your original “src” folder with the Project’s “src” and run your application: npm start

Your goals are;

When you enter name and hit the button, this name appears on the bottom of the names list,

**STEPS:**

**1.**

In your App.js file; send your state users to the Table component.

**2.**

In your Table.js file, print out this names and jobs to the DOM. Do not change the structure of Table component. (You should send your users to the TableBody. Then, you need to map your users)

**3.**

In your Form.js file, create two state values according to the entered name and job (via input). You may create a method that changes states and call with input onchange handler. Or you may directly change states within input onchange handler.

**4.**

Write state values to the `<h2>` element under `<form>` element.

**5.**

In your App.js file; create a `updateNames()` method to add new users.

For testing; create a button and call this method from this button onclick. (give new values by hand and see the result)

**6.**

Finally give a parameter to add new users. Send this method to the Form component.

**7.**

In your Form.js component, create a `handleSubmit()` method and send your state to the App component by submitting the form with the help of `updateNames()` method.

**8.**

If everything is ok;  in App component `updateNames()` method will update your users state.

**9.**

finally; when you click button, you should see your entered name under the names list.

Congragulations!

**Challenge**

Create a delete button for names and delete names from state.
