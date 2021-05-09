var AR = document.getElementById("AR");
var EN = document.getElementById("EN");



AR.onclick = ()=>{
    setlanguage("arabic");
    localStorage.setItem("lang" , "arabic")
}

EN.onclick = ()=>{
    setlanguage("english")
    localStorage.setItem("lang" , "english")
}

onload = ()=>{
    setlanguage(localStorage.getItem("lang"))
}

function setlanguage(getlanguage){
    if(getlanguage === "arabic"){
        // titles //
        title.innerHTML = "أهمية البرمجة في المستقبل"
        T1.innerHTML = "البرمجة وظيفة المستقبل"
        T2.innerHTML = "تعلّم بذكاء"
        T3.innerHTML = "لماذا البرمجة؟ أهمية البرمجة في المستقبل"
        T4.innerHTML = "مجالات وأنواع البرمجة"
        T5.innerHTML = "أما عن المجالات التي يمكن العمل فيها فأنها كثيرة و منها"
        // titles //
        // label //
        L1.innerHTML = "هل تساءلت يومًا ما أفضل وظائف المستقبل؟، من المعروف أنّ تقدم الزمن يعمل على خلق وظائف جديدة بسبب الزيادة في احتياجات الأفراد، ويعمل على محو أخرى بسبب اختراع آلةٍ ما تقوم به على نحوٍ أفضل، ومن الملاحظ أنه في وقتنا الحالي بسبب التقدم السريع للتكنولوجيا، ودخول الذكاء الاصطناعي بقوة بات وشيكًا أن يفقد الكثير من الأشخاص وظائفهم لتكون الآلة هي البديل الفعال عنهم. وهنا تكمن أهمية البرمجة في المستقبل."
        L2.innerHTML = ":عند البدء في عملية التعلم يجب وأن تطرح على نفسك بعض الأسئلة منها"
        L3.innerHTML = "يتبادر لذهن البعض هذا التساؤل، ويمكننا الإجابة ببساطة عليه، أنه إذا لم تستطع مشاركة الآلة عملها فاعمل على تشغيلها، كما ذكرنا وكما هو واضح للجميع فإن المستقبل يسير بخطى ثابتة نحو تحويل الكثير من الأعمال الثقيلة التي يقوم بها الأفراد إلى الآلات لأنها وببساطة تقوم بها بكفاءة أعلى وتكلفة أقل، لهذا فالاتجاه لتعلم البرمجة من الآن يصبح هو الخيار الأفضل وتلك بعض الأسباب لهذا"
        L4.innerHTML = "يعتبر مجال البرمجة من المجالات المستحدثة، ولكنه من المجالات التي تطورت بسرعة كبيرة لذلك فهي مستمرة في التطور. وهذا ما يجعل أهمية البرمجة في المستقبل ضرورية. وتعرف البرمجة على أنها عملية تصميم وبناء برامج حاسوبية قابلة للتنفيذ بهدف استكمال أو القيام بمهمة تتعلق بالحاسوب، وتُعد أيضًا التخصص الذي يُمكّن صاحبه من كتابة الأوامر والتعليمات للحاسوب، عن طريق تلقينه بعض الأوامر باللغة التي يفهمها لتنفيذ المهام وحل بعض المشكلات، ويخرج منها العديد من التخصصات مثل:"
        // label //
        // ul-li //
        U1_L1.innerHTML = "ما الفائدة مما أتعلمه الآن؟"
        U1_L2.innerHTML = "إلى أي مدى يمكن للمعرفة التي أكتسبها البقاء والتطور؟"

        U2_L1.innerHTML = "كما أنها تعتبر مهنة تجلب دخلًا مجزيًا. "
        U2_L2.innerHTML = "من السهل إيجاد عمل إذا أتقنت إحدى لغاتها."
        U2_L3.innerHTML = "كما أنه يمكنك العمل بها بشكل مستقل حيث تستطيع بذلك أن تكون المدير والمسؤول عن نفسك."
        U2_L4.innerHTML = "المرونة في العمل."
        U2_L5.innerHTML = "كما أنه يمكنك العمل من أي مكان."
        U2_L6.innerHTML = "حيث أنه لا يستلزم الحصول على شهادة أكاديمية للعمل بها في أكبر الشركات مثل جوجل ومايكروسوفت."
        U2_L7.innerHTML = "كما أنها تجعلك مطلعًا على أبرز ما يتوصل إليه العالم في المجال التكنولوجي والذكاء الاصطناعي."
        U2_L8.innerHTML = "دراستها والاشتغال بها تجعل عقلك مدربًا على التفكير المنطقي وحل المشكلات."

        U3_L1.innerHTML = "هندسة البرمجيات"
        U3_L2.innerHTML = "أمن الشبكات"
        U3_L3.innerHTML = "الذكاء الاصطناعي"
        U3_L4.innerHTML = "علم الروبوتات"
        U3_L5.innerHTML = "نظم المعلومات الحاسوبية"

        U4_L1.innerHTML = ".تصميم الصفحات و المواقع الألكترونية"
        U4_L2.innerHTML = ".برمجة مواقع الويب"
        U4_L3.innerHTML = ".PHP مبرمج"
        U4_L4.innerHTML = ".مبرمج عام"
        U4_L5.innerHTML = ".متخصص بقواعد البيانات"
        U4_L6.innerHTML = ".مبرمج لتطبيقات الهاتف"
        // ul-li //
    }else if(getlanguage === "english"){
        // titles //
        title.innerHTML = "The importance of programming in the future"
        T1.innerHTML = "Future job programming"
        T2.innerHTML = "Learn smart"
        T3.innerHTML = "Why programming? The importance of programming in the future"
        T4.innerHTML = "Domains and types of programming"
        T5.innerHTML = "As for the areas that can be worked in, they are many and of them"
        // titles //
        // label //
        L1.innerHTML = "Have you ever wondered about the best jobs for the future? It is well known that the advancement of time creates new jobs due to the increase in the needs of individuals, and works on erasing others due to the invention of a machine that does it better, and it is noticeable that in our time due to the rapid advancement of technology, With the strong entry of artificial intelligence, it is imminent that many people will lose their jobs so that the machine will be an effective alternative to them. Here lies the importance of programming in the future."
        L2.innerHTML = "When starting the learning process, you should ask yourself some questions, including:"
        L3.innerHTML = "Some people think of this question, and we can answer it simply, that if you cannot share the machine its work then work to operate it, as we mentioned and as is clear to all, the future is moving steadily towards converting a lot of heavy work that people do into machines because it is simply doing it efficiently. Higher and lower cost, so the trend to learn programming from now becomes the best option, and these are some of the reasons for this"
        L4.innerHTML = "The field of programming is considered one of the new fields, but it is one of the fields that has developed very quickly, so it is continuing to develop. This is why programming in the future is essential. Programming is defined as the process of designing and building executable computer programs with the aim of completing or performing a computer-related task, and it is also a specialty that enables its owner to write commands and instructions for the computer, by instructing him in some commands in the language he understands to carry out the tasks and solve some problems, and many specializations come out of it. Such as:"
        // label //
        // ul-li //
        U1_L1.innerHTML = "What's the point of what I'm learning now?"
        U1_L2.innerHTML = "How long can the knowledge I gain survive and develop?"

        U2_L1.innerHTML = "It is also considered a very rewarding profession."
        U2_L2.innerHTML = "It's easy to find work if you master one of her languages."
        U2_L3.innerHTML = "Also, you can work with it independently where you can be the manager and responsible for yourself."
        U2_L4.innerHTML = "Flexibility in work."
        U2_L5.innerHTML = "Also, you can work from anywhere."
        U2_L6.innerHTML = "As it is not required to obtain an academic certificate to work with it in the largest companies such as Google and Microsoft."
        U2_L7.innerHTML = "It also makes you aware of the world's most prominent technology and artificial intelligence."
        U2_L8.innerHTML = "Studying and engaging in them makes your mind trained in logical thinking and problem solving."

        U3_L1.innerHTML = "Software Engineering"
        U3_L2.innerHTML = "Network security"
        U3_L3.innerHTML = "Artificial intelligence"
        U3_L4.innerHTML = "Robotics"
        U3_L5.innerHTML = "Computer information systems"

        U4_L1.innerHTML = "Design of pages and websites"
        U4_L2.innerHTML = "Website programming"
        U4_L3.innerHTML = ".PHP Programmer"
        U4_L4.innerHTML = "General programmer"
        U4_L5.innerHTML = "Database specialist"
        U4_L6.innerHTML = ". Mobile application programmer"
        // ul-li //

    }
}
