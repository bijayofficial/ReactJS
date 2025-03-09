import "./App.css";
import Card from "./components/Card";
import "./index.css";

function App() {
  const content = [
    { 
      "url": "https://cdn.pixabay.com/photo/2025/02/03/13/53/coffee-9379521_1280.png",
      "para": "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
      "name": "Staff Engineer, Algolia"
    },
  
  ];

  return (
    <>
      <h1 className="text-3xl text-white text-center my-10">tailwind test</h1>
    <Card username = "Bijay Ghosh" otherdets = {content} />

      {/* {content.map((element, index) => (
        <figure key={index} className="md:flex bg-slate-100 rounded-xl p-8 m-3 md:p-0 dark:bg-slate-200 w-[45%]">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={element.url}
            alt="Profile"
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium">{element.para}</p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-orange-600">{element.name}</div>
            </figcaption>
          </div>
        </figure>
      ))} */}
    </>
  );
}

export default App;

  /* <figure class="md:flex bg-slate-100 rounded-xl p-8 m-3 md:p-0 dark:bg-slate-200 w-[45%]">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://cdn.pixabay.com/photo/2025/02/03/13/53/coffee-9379521_1280.png"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:tex space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-orange-600">
              
            </div>
          </figcaption>
        </div>
      </figure> */