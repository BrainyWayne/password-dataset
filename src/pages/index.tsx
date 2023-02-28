import * as React from 'react';
import { useState } from 'react';

import {
  ADJECTIVES1,
  ADJECTIVES2,
  ADJECTIVES3,
  ADVERBS1,
  ADVERBS3,
  NOUNS1,
  NOUNS2,
  NOUNS3,
  PREPOSITIONS1,
  PREPOSITIONS2,
  PREPOSITIONS3,
  VERBS1,
  VERBS2,
  VERBS3,
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

  const [list, setList] = useState<string>();

  //Handle list change. Get the data from local storage
  React.useEffect(() => {
    const adjectives1 = localStorage.getItem('adjectives1');
    const adjectives2 = localStorage.getItem('adjectives2');
    const adjectives3 = localStorage.getItem('adjectives3');
    const adverb1 = localStorage.getItem('adverb1');
    const adverb2 = localStorage.getItem('adverb2');
    const adverb3 = localStorage.getItem('adverb3');
    const noun1 = localStorage.getItem('noun1');
    const noun2 = localStorage.getItem('noun2');
    const noun3 = localStorage.getItem('noun3');
    const preposition1 = localStorage.getItem('preposition1');
    const preposition2 = localStorage.getItem('preposition2');
    const preposition3 = localStorage.getItem('preposition3');
    const verb1 = localStorage.getItem('verb1');
    const verb2 = localStorage.getItem('verb2');
    const verb3 = localStorage.getItem('verb3');

    if (list == 'adjective') {
      setSyllable1(JSON.parse(adjectives1 ?? '[]'));
      setSyllable2(JSON.parse(adjectives2 ?? '[]'));
      setSyllable3(JSON.parse(adjectives3 ?? '[]'));
    } else if (list == 'adverb') {
      setSyllable1(JSON.parse(adverb1 ?? '[]'));
      setSyllable2(JSON.parse(adverb2 ?? '[]'));
      setSyllable3(JSON.parse(adverb3 ?? '[]'));
    } else if (list == 'noun') {
      setSyllable1(JSON.parse(noun1 ?? '[]'));
      setSyllable2(JSON.parse(noun2 ?? '[]'));
      setSyllable3(JSON.parse(noun3 ?? '[]'));
    } else if (list == 'preposition') {
      setSyllable1(JSON.parse(preposition1 ?? '[]'));
      setSyllable2(JSON.parse(preposition2 ?? '[]'));
      setSyllable3(JSON.parse(preposition3 ?? '[]'));
    } else if (list == 'verb') {
      setSyllable1(JSON.parse(verb1 ?? '[]'));
      setSyllable2(JSON.parse(verb2 ?? '[]'));
      setSyllable3(JSON.parse(verb3 ?? '[]'));
    } else {
      setSyllable1([]);
      setSyllable2([]);
      setSyllable3([]);
    }
  }, [list]);

  //When there is a change in syllable1, syllable2, syllable3, save the data to local storage
  React.useEffect(() => {
    if (list == 'adjective') {
      localStorage.setItem('adjectives1', JSON.stringify(syllable1));
      localStorage.setItem('adjectives2', JSON.stringify(syllable2));
      localStorage.setItem('adjectives3', JSON.stringify(syllable3));
    } else if (list == 'adverb') {
      localStorage.setItem('adverb1', JSON.stringify(syllable1));
      localStorage.setItem('adverb2', JSON.stringify(syllable2));
      localStorage.setItem('adverb3', JSON.stringify(syllable3));
    } else if (list == 'noun') {
      localStorage.setItem('noun1', JSON.stringify(syllable1));
      localStorage.setItem('noun2', JSON.stringify(syllable2));
      localStorage.setItem('noun3', JSON.stringify(syllable3));
    } else if (list == 'preposition') {
      localStorage.setItem('preposition1', JSON.stringify(syllable1));
      localStorage.setItem('preposition2', JSON.stringify(syllable2));
      localStorage.setItem('preposition3', JSON.stringify(syllable3));
    } else if (list == 'verb') {
      localStorage.setItem('verb1', JSON.stringify(syllable1));
      localStorage.setItem('verb2', JSON.stringify(syllable2));
      localStorage.setItem('verb3', JSON.stringify(syllable3));
    }
  }, [syllable1, syllable2, syllable3]);

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

              {/* Button at the top left to load the initial data to local storage */}
              <div className='fixed top-0 left-0 mt-5 ml-5'>
                <button
                  className='rounded bg-slate-100 px-3 py-1'
                  onClick={() => {
                    localStorage.setItem(
                      'adjectives1',
                      JSON.stringify(ADJECTIVES1)
                    );
                    localStorage.setItem(
                      'adjectives2',
                      JSON.stringify(ADJECTIVES2)
                    );
                    localStorage.setItem(
                      'adjectives3',
                      JSON.stringify(ADJECTIVES3)
                    );
                    localStorage.setItem('adverb1', JSON.stringify(ADVERBS1));
                    localStorage.setItem(
                      'adverb2',
                      JSON.stringify(ADJECTIVES2)
                    );
                    localStorage.setItem('adverb3', JSON.stringify(ADVERBS3));
                    localStorage.setItem('noun1', JSON.stringify(NOUNS1));
                    localStorage.setItem('noun2', JSON.stringify(NOUNS2));
                    localStorage.setItem('noun3', JSON.stringify(NOUNS3));
                    localStorage.setItem(
                      'preposition1',
                      JSON.stringify(PREPOSITIONS1)
                    );
                    localStorage.setItem(
                      'preposition2',
                      JSON.stringify(PREPOSITIONS2)
                    );
                    localStorage.setItem(
                      'preposition3',
                      JSON.stringify(PREPOSITIONS3)
                    );
                    localStorage.setItem('verb1', JSON.stringify(VERBS1));
                    localStorage.setItem('verb2', JSON.stringify(VERBS2));
                    localStorage.setItem('verb3', JSON.stringify(VERBS3));

                    setList('adjective');
                  }}
                >
                  Load Initial Data
                </button>
              </div>

              {/* Button at the top right to save all the data from the local storage into an object-array item like this: adjective:[] */}
              <div className='fixed top-0 right-0 mt-20 mr-5'>
                <button
                  className='rounded bg-slate-100 px-3 py-1'
                  onClick={() => {
                    const data = {
                      adjective1: localStorage.getItem('adjectives1'),
                      adjective2: localStorage.getItem('adjectives2'),
                      adjective3: localStorage.getItem('adjectives3'),
                      adverb1: localStorage.getItem('adverb1'),
                      adverb2: localStorage.getItem('adverb2'),
                      adverb3: localStorage.getItem('adverb3'),
                      noun1: localStorage.getItem('noun1'),
                      noun2: localStorage.getItem('noun2'),
                      noun3: localStorage.getItem('noun3'),
                      preposition1: localStorage.getItem('preposition1'),
                      preposition2: localStorage.getItem('preposition2'),
                      preposition3: localStorage.getItem('preposition3'),
                      verb1: localStorage.getItem('verb1'),
                      verb2: localStorage.getItem('verb2'),
                      verb3: localStorage.getItem('verb3'),
                    };

                    console.log(data);

                    //copy to clipboard
                    navigator.clipboard.writeText(JSON.stringify(data));
                  }}
                >
                  Finalize Data
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
