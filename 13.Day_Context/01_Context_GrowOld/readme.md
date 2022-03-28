# React-Context Grow Old

Bu projede; bağlam mantığını anlamamızı sağlayan basit bir web uygulaması yapacağız.

Başlayalım!

Halihazırda çalışan bir React yolunuz varsa (veya yeni bir tane oluşturduysanız):
Orijinal “src” klasörünüzü Projenin “src” ile değiştirin ve uygulamanızı çalıştırın: npm start

ADIMLAR:
1.
Bu adımda, müşteri bilgilerini bileşenin kökünde depolamak için bağlamı kullanacaksınız. Özel bir bağlam oluşturacaksınız, ardından bilgileri projenin kökünde depolayacak olan Sağlayıcı adı verilen özel bir sarma bileşeni kullanacaksınız. Ardından, statik bilgileri görüntüleyebilmeniz için sağlayıcıyla iç içe geçmiş bileşenlerde bağlantı kurmak için useContext Hook'u kullanacaksınız.

İlk olarak, Context'i oluşturalım. İçinde bir bağlam klasörü ve MyContext.js dosyası oluşturun. createContext yöntemini kullanın ve ilk değerleri boş bırakın.
• sabit bir MyContext'e createContext atayın.

App.js dosyasında burada birkaç şey yapacaksınız:
• Başlangıç durumunu ({name:”John”, age:33}) belirtmek ve bir setter yöntemi setstate oluşturmak için React Hooks (useState) kullanın.
• Bir GrowOlder işlevi oluşturun, sadece setstate'i çağırın; yaşı +1 ile çarpın ve durum nesnesini güncelleyin.
• MyContext.Provider'ı kullanarak Uygulamanızı hiyerarşiye sarın. Durum ve büyümeOlder işlevini değerler olarak gönderin.
• `</p>` öğesinin altına Family alt bileşenini ekleyin. (p'nin kapanış etiketinden sonra p'nin içinde değil anlamına gelir)

Family.js dosyasında alt bileşen Kişi ekleyin; Bu bizim React Context tüketicimiz.
• Person.js dosyasında, MyContext'ten bağlam almak için useContext kanca yöntemini kullanın.
• p öğelerinin içinde adı ve yaşı görüntüleyin.

Şimdi, bağlamdan GrowOlder işlevini kullanmalıyız. Bu işlevi düğmenin onclick işleyicisine koyun.

Şimdiye kadar yalnızca Uygulama bileşenindeki bağlam değerlerini kullandık. Şimdi bunu bir Sağlayıcı bileşenine değiştireceğiz.
• Bir MyProvider bileşeni oluşturun ve bunu MyContext.js dosyasına dışa aktarın.
• Uygulama bileşeninden durum nesnesini ve GrowOlder işlevini kesin ve MyProvider bileşeninin içine koyun.
• Durum nesnesi ve büyümeOlder işlevinin değerleriyle MyContext.Provider döndürün.

Ardından, Uygulamanızı MyProvider kullanarak (MyContext.Provider yerine) sarın. Bu kadar. Şimdi başka bir bileşenden bağlam verileri alıyorsunuz.

Çözüm:
Bağlam, size bir uygulamada veri depolama ve kullanma yeteneği veren güçlü ve esnek bir araçtır. Herhangi bir ek üçüncü taraf kurulumu veya yapılandırması gerektirmeyen yerleşik araçlarla dağıtılmış verileri işleme yeteneği sağlar.
Temalar, form verileri, uyarı mesajları ve daha fazlası dahil olmak üzere birçok türde bilgiyi bağlamlarda saklayabilirsiniz. Bağlam, verileri aracı bileşenlerden nasıl geçireceğiniz veya mağazayı çok büyütmeden merkezi bir mağazada nasıl depolayacağınız konusunda endişelenmeden verilere erişebilen bileşenler oluşturma özgürlüğü verir.

---



# React-Context Grow Old

In this Project; we’ll make a simple web app that lets us understand context logic.

Let’s get started!

If you have a working React path already (or you just created a new one):

Change your original “src”folder with the Project’s “src” and run your application: npm start

**STEPS:**

**1.**

*In this
step, you’ll use context to store the customer information at the root of the component.
You’ll create a custom context, then use a special wrapping component called a [`<span>Provider</span>`](https://reactjs.org/docs/context.html#contextprovider)** that will
store the information at the root of the project. You’ll then use the [`<span>useContext</span>` Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)** to connect
with the provider in nested components so you can display the static information.*

First, let’s create the Context. Create a context
folder and MyContext.jsfile inside it. Use createContext method and
leave initial values empty.

·
Assign createContext to a constant MyContext.

**2.**

In App.js file you will do a few
things here:

·
Use React Hooks (useState) to keep initialstate ({name:”John”, age:33}) to state and create a setter
method setstate.

·
Create an growOlder function just call the
setstate; multiply age with +1 and update state object.

·
Wrap your App in the hierarchy using MyContext.Provider. Send state and growOlder function as values.

·
Add child component Family under `</p>` element.
(it means; not inside p, after the closing tag of p)

**3.**

In `<span>Family.js</span>` file
add child component  `<span>Person</span>` ; This is our *consumer*
of React Context.

·
In `<span>Person.js</span>` file,
use useContext hook method to take context from MyContext.

·
Display name and age inside p elements.

**4.**

Now, we should consume growOlder function from context. Put this function
into a onclick handler of button.

**5.**

So far, we’ve only used the context values from
`<span>App</span>` component. Now we will
change this to a Provider component.

·
Create a `<span>MyProvider</span>` component and export it inside `<span>MyContext.js</span>` file.

·
Cut the state object and growOlder function from `<span>App</span>` component and put inside `<span>MyProvider</span>` component.

·
Return MyContext.Provider with the values of the state object and growOlder function.

**6.**

Then, Wrap your App using MyProvider (instead of MyContext.Provider).
That is it. Now you are taking context data from another component.

**Conclusion:**

*Context is a powerful and flexible tool that gives you the ability to store
and use data across an application. It gives you the ability to handle distributed
data with built-in tools that do not require any additional third party installation
or configuration*

 *You can store many types of information in contexts including themes, form
data, alert messages, and more. Context gives you the freedom to build components
that can access data without worrying about how to pass data through intermediary
components or how to store data in a centralized store without making the store
too large* *.*
