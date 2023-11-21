import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { auth, db } from "../../../firebase/firebase";

const Cards = ({ title, description, link }) => {
  return (
    <div class="flex flex-col bg-gray-50 border-teal-400 border w-1/3 shadow-sm rounded-xl">
      <div className="flex justify-center items-center">
        <img
          class="w-[95%] h-[95%] rounded-t-xl"
          src="https://img.freepik.com/premium-vector/documents-folder-with-stamp-text-contract-with-approval-stamp_349999-535.jpg?w=2000"
          alt="Image Description"
        />
      </div>
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 ">{title}</h3>
        <p class="mt-1 text-gray-500 ">{description}</p>
        <a
          class="mt-2 w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          Visit
        </a>
      </div>
    </div>
  );
};

const RecentDocs = () => {
  const [article, setArticle] = useState([]);
  const getUsersArticles = () => {
    db.collection("Users")
      .doc(auth.currentUser?.email)
      .collection("resources")
      .onSnapshot((snapshot) => {
        const temp = [];
        snapshot.docs.map((doc) => {
          temp.push(doc.data());
        });
        setArticle(temp);
      });
  };

  useEffect(() => {
    getUsersArticles();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap gap-5 justify-evenly">
        {article.length > 0 ? (
          article.map((item, idx) => {
            return (
              <Cards
                key={idx}
                title={item.author}
                description={item.publication}
                link={item.url}
              />
            );
          })
        ) : (
          <div className="flex items-center justify-center h-[80vh] text-4xl font-bold text-gray-600">No Document Saved !!</div>
        )}
      </div>
    </Layout>
  );
};

export default RecentDocs;
