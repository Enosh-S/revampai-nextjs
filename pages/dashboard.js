import Header from '../components/Header';
import React, { useState } from 'react';

export default function Dasboard() {
  const [text, setText] = useState('');
  const onHandleChange = (event) => {
    setText(event.target.value);
  };
  const [keyword, setKeyword] = useState('');
  const onKeywordChange = (keywordEvent) => {
    setKeyword(keywordEvent.target.value);
  };

  return (
    <>
      <Header />
      <div class=" w-fill h-20 bg-gray-100 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-600 py-5 px-5 ">Dashboard</h1>
      </div>
      <div class="flex flex-col card shadow mx-auto w-fill lg:mx-10 lg:mt-5">
        <div class="flex flex-col w-full lg:flex-row py-10 mx-auto px-10">
          <div class="grid flex-grow h-flex card rounded-box place-items-center-top px-5 py-5">
            <div class="mt-5">
              <h1 class="text-xl font-bold">Select your usecase</h1>
              <select class="select select-primary w-full max-w-xs mt-3 shadow ">
                <option id="1">Blog section writer</option>
                <option id="2">Blog title generator</option>
                <option id="3">Youtube script outline</option>
                <option id="5">Podcast script outline</option>
                <option id="6">Instagram caption</option>
                <option id="7">Twitter Tweet</option>
                <option id="4">Youtube video description</option>
              </select>
            </div>
            <div class="mt-5">
              <h1 class="text-xl font-bold">Enter your prompt</h1>
              <div>
                <input
                  id="prompt"
                  maxLength="120"
                  value={text}
                  rows={3}
                  onChange={onHandleChange}
                  placeholder="Be as specific as possible"
                  class="input input-bordered input-primary w-full max-w-xs mt-3 font-normal"
                ></input>
              </div>
              <div class="text-base-300 mt-1">
                <p className="item-end">{text.length} /120 characters</p>
              </div>
            </div>
            <div class="mt-3">
              <h1 class="text-xl font-bold">Enter your keywords</h1>
              <div>
                <input
                  id="keywords"
                  maxLength="140"
                  value={keyword}
                  rows={3}
                  onChange={onKeywordChange}
                  placeholder="Revamp AI, Best AI tool, AI content generator"
                  class="input input-bordered input-primary w-full max-w-xs mt-3 font-normal"
                ></input>
              </div>
              <div class="text-base-300 mt-1">
                <p className="item-end">{keyword.length} /140 characters</p>
              </div>
            </div>
            <div class=" mt-3">
              <button class="btn gap-2 btn-primary text-white">
                Revamp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="divider lg:divider-horizontal">AI</div>
          <div class="grid flex-grow h-flex md:w-1/3 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </>
  );
}
