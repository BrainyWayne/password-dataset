import * as React from 'react';
import { useState } from 'react';

import {
  ADJECTIVES1,
  ADJECTIVES2,
  ADJECTIVES3,
} from '@/data/finalwords/adjectives1';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [syllable1, setSyllable1] = useState<string[]>([]);
  const [syllable2, setSyllable2] = useState<string[]>([]);
  const [syllable3, setSyllable3] = useState<string[]>([]);
  const [undo, setUndo] = useState<{
    action: 'delete' | 'move';
    value: string;
    from: string;
    to: string;
  }>();

  const [list, setList] = useState<any>();

  //Handle list change
  React.useEffect(() => {
    if (list == 'adjective') {
      setSyllable1(ADJECTIVES1);
      setSyllable2(ADJECTIVES2);
      setSyllable3(ADJECTIVES3);
    } else {
      setSyllable1([]);
      setSyllable2([]);
      setSyllable3([]);
    }
  }, [list]);

  function moveWord(word: string, to: '1' | '2' | '3') {
    //
  }

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className=' relative flex min-h-screen flex-col items-center  py-12 text-center'>
            {/* <Vercel className='text-5xl' /> */}
            <h3 className='mt-4'>Password Dataset</h3>
            {/* Dropdown list */}
            <div>
              <div className='mt-5'>
                <select
                  className='rounded bg-slate-100 px-3 py-1'
                  onChange={(e) => {
                    setList(e.target.value);
                  }}
                >
                  <option value='adjective'>Adjective</option>
                  <option value='adverb'>Adverb</option>
                  <option value='preposition'>Preposition</option>
                  <option value='noun'>Noun</option>
                  <option value='verb'>Verb</option>
                </select>
              </div>

              {/* Undo Button and it sticks to the top of page. After action is done, remove undo item */}

              <div className='fixed top-0 right-0 mt-5 mr-5'>
                <button
                  className='rounded bg-slate-100 px-3 py-1'
                  onClick={() => {
                    if (undo?.action == 'delete') {
                      if (undo.from == '1') {
                        const newSyllable1 = [...syllable1, undo.value];
                        setSyllable1(newSyllable1);
                      } else if (undo.from == '2') {
                        const newSyllable2 = [...syllable2, undo.value];
                        setSyllable2(newSyllable2);
                      } else if (undo.from == '3') {
                        const newSyllable3 = [...syllable3, undo.value];
                        setSyllable3(newSyllable3);
                      }
                    } else if (undo?.action == 'move') {
                      if (undo.from == '1') {
                        const newSyllable1 = [...syllable1, undo.value];
                        setSyllable1(newSyllable1);
                      } else if (undo.from == '2') {
                        const newSyllable2 = [...syllable2, undo.value];
                        setSyllable2(newSyllable2);
                      } else if (undo.from == '3') {
                        const newSyllable3 = [...syllable3, undo.value];
                        setSyllable3(newSyllable3);
                      }

                      if (undo.to == '1') {
                        const newSyllable1 = syllable1.filter(
                          (item) => item !== undo.value
                        );
                        setSyllable1(newSyllable1);
                      } else if (undo.to == '2') {
                        const newSyllable2 = syllable2.filter(
                          (item) => item !== undo.value
                        );
                        setSyllable2(newSyllable2);
                      } else if (undo.to == '3') {
                        const newSyllable3 = syllable3.filter(
                          (item) => item !== undo.value
                        );
                        setSyllable3(newSyllable3);
                      }
                    }

                    setUndo(undefined);
                  }}
                >
                  Undo
                </button>
              </div>
            </div>

            <div className='flex flex-wrap gap-10'>
              {/*  1 syllable list */}

              <div className='mt-10 w-96'>
                <div className=''>1 Syllable ({syllable1.length})</div>
                <div className=' mt-5 flex flex-col'>
                  {syllable1.map((word, index) => (
                    <div
                      key={index}
                      className={`group flex w-full cursor-pointer gap-5 rounded py-1 px-3 hover:bg-slate-100 `}
                    >
                      <div
                        className={`flex flex-1 items-center justify-center rounded ${
                          index % 2 == 0 ? 'bg-gray-300' : 'bg-gray-100'
                        }`}
                      >
                        {word}
                      </div>
                      <div
                        onClick={() => {
                          //Delete word from list
                          const list = syllable1.filter(
                            (item, i) => i !== index
                          );
                          setSyllable1(list);

                          //Add word to undo
                          setUndo({
                            action: 'delete',
                            value: word,
                            from: '1',
                            to: '1',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-center transition-all hover:scale-105 '
                      >
                        🗑️
                      </div>
                      <div
                        onClick={() => {
                          //Add word to adjective2 list
                          const newAdjective2 = [...syllable2, word];
                          setSyllable2(newAdjective2);
                          //Delete word from list
                          const newAdjective1 = syllable1.filter(
                            (item, i) => i !== index
                          );
                          setSyllable1(newAdjective1);

                          //Add word to undo
                          setUndo({
                            action: 'move',
                            value: word,
                            from: '1',
                            to: '2',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-center transition-all hover:scale-105 '
                      >
                        2S
                      </div>
                      <div
                        onClick={() => {
                          //Add word to adjective3 list
                          const newAdjective3 = [...syllable3, word];
                          setSyllable3(newAdjective3);
                          //Delete word from list
                          const newAdjective1 = syllable1.filter(
                            (item, i) => i !== index
                          );
                          setSyllable1(newAdjective1);

                          //Add word to undo
                          setUndo({
                            action: 'move',
                            value: word,
                            from: '1',
                            to: '3',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-green-400 text-center transition-all hover:scale-105 '
                      >
                        3S
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/*  2 syllable list */}
              <div className='mt-10 w-96'>
                <div className=''>2 Syllables ({syllable2.length})</div>
                <div className=' mt-5 flex flex-col'>
                  {syllable2.map((word, index) => (
                    <div
                      key={index}
                      className={`group flex w-full cursor-pointer gap-5 rounded py-1 px-3 hover:bg-slate-100 `}
                    >
                      <div
                        className={`flex flex-1 items-center justify-center rounded ${
                          index % 2 == 0 ? 'bg-gray-300' : 'bg-gray-100'
                        }`}
                      >
                        {word}
                      </div>
                      <div
                        onClick={() => {
                          //Delete word from list
                          const list = syllable2.filter(
                            (item, i) => i !== index
                          );
                          setSyllable2(list);

                          //Add word to undo
                          setUndo({
                            action: 'delete',
                            value: word,
                            from: '2',
                            to: '2',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-center transition-all hover:scale-105 '
                      >
                        🗑️
                      </div>
                      <div
                        onClick={() => {
                          //Add word to adjective2 list
                          const newAdjective2 = [...syllable1, word];
                          setSyllable1(newAdjective2);

                          //Delete word from list
                          const newAdjective1 = syllable2.filter(
                            (item, i) => i !== index
                          );
                          setSyllable2(newAdjective1);

                          //Add word to undo
                          setUndo({
                            action: 'move',
                            value: word,
                            from: '2',
                            to: '1',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-center transition-all hover:scale-105 '
                      >
                        1S
                      </div>
                      <div
                        onClick={() => {
                          //Add word to adjective3 list
                          const newAdjective3 = [...syllable3, word];

                          setSyllable3(newAdjective3);

                          //Delete word from list
                          const newAdjective1 = syllable2.filter(
                            (item, i) => i !== index
                          );
                          setSyllable2(newAdjective1);
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-green-400 text-center transition-all hover:scale-105 '
                      >
                        3S
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/*  3 syllable list */}
              <div className='mt-10 w-96'>
                <div className=''>3 Syllables ({syllable3.length})</div>
                <div className=' mt-5 flex flex-col'>
                  {syllable3.map((word, index) => (
                    <div
                      key={index}
                      className={`group flex w-full cursor-pointer gap-5 rounded py-1 px-3 hover:bg-slate-100 `}
                    >
                      <div
                        className={`flex flex-1 items-center justify-center rounded ${
                          index % 2 == 0 ? 'bg-gray-300' : 'bg-gray-100'
                        }`}
                      >
                        {word}
                      </div>
                      <div
                        onClick={() => {
                          //Delete word from list
                          const list = syllable3.filter(
                            (item, i) => i !== index
                          );

                          setSyllable3(list);

                          //Add word to undo
                          setUndo({
                            action: 'delete',
                            value: word,
                            from: '3',
                            to: '3',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-center transition-all hover:scale-105 '
                      >
                        🗑️
                      </div>
                      <div
                        onClick={() => {
                          //Add word to adjective2 list
                          const newAdjective2 = [...syllable1, word];
                          setSyllable1(newAdjective2);

                          //Delete word from list
                          const newAdjective1 = syllable3.filter(
                            (item, i) => i !== index
                          );
                          setSyllable3(newAdjective1);

                          //Add word to undo
                          setUndo({
                            action: 'move',
                            value: word,
                            from: '3',
                            to: '1',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-center transition-all hover:scale-105 '
                      >
                        1S
                      </div>
                      <div
                        onClick={() => {
                          //Add word to adjective3 list
                          const newAdjective3 = [...syllable2, word];
                          setSyllable2(newAdjective3);

                          //Delete word from list
                          const newAdjective1 = syllable3.filter(
                            (item, i) => i !== index
                          );
                          setSyllable3(newAdjective1);

                          //Add word to undo
                          setUndo({
                            action: 'move',
                            value: word,
                            from: '3',
                            to: '2',
                          });
                        }}
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-green-400 text-center transition-all hover:scale-105 '
                      >
                        3S
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
