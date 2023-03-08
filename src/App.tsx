import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    author: "Diego",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam magnam numquam temporibus! Nihil vero minima unde illum beatae quam voluptatibus sed asperiores, ex cumque ipsam nesciunt repellat tempore quos.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ author, content }) => (
            <Post author={author} content={content} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
