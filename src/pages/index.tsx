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
  const [version, setVersion] = useState('1');
  const [bookmark, setBookmark] = useState<any>();
  const [undo, setUndo] = useState<{
    action: 'delete' | 'move';
    value: string;
    from: string;
    to: string;
  }>();

  const [list, setList] = useState<string>();

  //Handle list change. Get the data from local storage
  React.useEffect(() => {
    const adjectives1 = localStorage.getItem('adjectives1' + version);
    const adjectives2 = localStorage.getItem('adjectives2' + version);
    const adjectives3 = localStorage.getItem('adjectives3' + version);
    const adverb1 = localStorage.getItem('adverb1' + version);
    const adverb2 = localStorage.getItem('adverb2' + version);
    const adverb3 = localStorage.getItem('adverb3' + version);
    const noun1 = localStorage.getItem('noun1' + version);
    const noun2 = localStorage.getItem('noun2' + version);
    const noun3 = localStorage.getItem('noun3' + version);
    const preposition1 = localStorage.getItem('preposition1' + version);
    const preposition2 = localStorage.getItem('preposition2' + version);
    const preposition3 = localStorage.getItem('preposition3' + version);
    const verb1 = localStorage.getItem('verb1' + version);
    const verb2 = localStorage.getItem('verb2' + version);
    const verb3 = localStorage.getItem('verb3' + version);

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
  }, [list, version]);

  //When there is a change in syllable1, syllable2, syllable3, save the data to local storage
  React.useEffect(() => {
    if (list == 'adjective') {
      localStorage.setItem('adjectives1' + version, JSON.stringify(syllable1));
      localStorage.setItem('adjectives2' + version, JSON.stringify(syllable2));
      localStorage.setItem('adjectives3' + version, JSON.stringify(syllable3));
    } else if (list == 'adverb') {
      localStorage.setItem('adverb1' + version, JSON.stringify(syllable1));
      localStorage.setItem('adverb2' + version, JSON.stringify(syllable2));
      localStorage.setItem('adverb3' + version, JSON.stringify(syllable3));
    } else if (list == 'noun') {
      localStorage.setItem('noun1' + version, JSON.stringify(syllable1));
      localStorage.setItem('noun2' + version, JSON.stringify(syllable2));
      localStorage.setItem('noun3' + version, JSON.stringify(syllable3));
    } else if (list == 'preposition') {
      localStorage.setItem('preposition1' + version, JSON.stringify(syllable1));
      localStorage.setItem('preposition2' + version, JSON.stringify(syllable2));
      localStorage.setItem('preposition3' + version, JSON.stringify(syllable3));
    } else if (list == 'verb') {
      localStorage.setItem('verb1' + version, JSON.stringify(syllable1));
      localStorage.setItem('verb2' + version, JSON.stringify(syllable2));
      localStorage.setItem('verb3' + version, JSON.stringify(syllable3));
    }
  }, [syllable1, syllable2, syllable3]);

  React.useEffect(() => {
    const bookmark = localStorage.getItem('bookmark');
    if (bookmark) {
      setBookmark(JSON.parse(bookmark));
    }
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex flex-row'>
        <section className='fixed h-screen w-52'>
          <div className=' left-0 ml-5 mt-5 flex w-fit flex-col gap-5'>
            {/* Undo Button and it sticks to the top of page. After action is done, remove undo item */}
            <div className=''>
              <button
                className='rounded bg-slate-100 px-3 py-1 text-sm'
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
            <div className=''>
              <button
                className='rounded bg-slate-100 px-3 py-1 text-sm'
                onClick={() => {
                  //Ask if user is sure user wants to load the data
                  const res = confirm(
                    'Are you sure you want to load the data? This will overwrite your current data.'
                  );
                  if (!res) return;

                  localStorage.setItem(
                    'adjectives1' + version,
                    JSON.stringify(ADJECTIVES1)
                  );
                  localStorage.setItem(
                    'adjectives2' + version,
                    JSON.stringify(ADJECTIVES2)
                  );
                  localStorage.setItem(
                    'adjectives3' + version,
                    JSON.stringify(ADJECTIVES3)
                  );
                  localStorage.setItem(
                    'adverb1' + version,
                    JSON.stringify(ADVERBS1)
                  );
                  localStorage.setItem(
                    'adverb2' + version,
                    JSON.stringify(ADJECTIVES2)
                  );
                  localStorage.setItem(
                    'adverb3' + version,
                    JSON.stringify(ADVERBS3)
                  );
                  localStorage.setItem(
                    'noun1' + version,
                    JSON.stringify(NOUNS1)
                  );
                  localStorage.setItem(
                    'noun2' + version,
                    JSON.stringify(NOUNS2)
                  );
                  localStorage.setItem(
                    'noun3' + version,
                    JSON.stringify(NOUNS3)
                  );
                  localStorage.setItem(
                    'preposition1' + version,
                    JSON.stringify(PREPOSITIONS1)
                  );
                  localStorage.setItem(
                    'preposition2' + version,
                    JSON.stringify(PREPOSITIONS2)
                  );
                  localStorage.setItem(
                    'preposition3' + version,
                    JSON.stringify(PREPOSITIONS3)
                  );
                  localStorage.setItem(
                    'verb1' + version,
                    JSON.stringify(VERBS1)
                  );
                  localStorage.setItem(
                    'verb2' + version,
                    JSON.stringify(VERBS2)
                  );
                  localStorage.setItem(
                    'verb3' + version,
                    JSON.stringify(VERBS3)
                  );

                  setList('adjective');
                }}
              >
                Load Initial Data
              </button>
            </div>
            {/* Button at the top left beneath the initial data button that removes all duplicates from the syllables */}
            {/* <div className=''>
                  <button
                    className='rounded bg-slate-100 px-3 py-1 text-sm'
                    onClick={() => {
                      //Ask if user is sure user wants to load the data
                      const res = confirm(
                        'Are you sure you want to remove all duplicates? This will overwrite your current data.'
                      );
                      if (!res) return;

                      const newSyllable1 = syllable1.filter(
                        (item, index) => syllable1.indexOf(item) === index
                      );
                      const newSyllable2 = syllable2.filter(
                        (item, index) => syllable2.indexOf(item) === index
                      );
                      const newSyllable3 = syllable3.filter(
                        (item, index) => syllable3.indexOf(item) === index
                      );

                      setSyllable1(newSyllable1);
                      setSyllable2(newSyllable2);
                      setSyllable3(newSyllable3);

                      //Copy the data to clipboard in format noun = []
                    }}
                  >
                    Remove Duplicates
                  </button>
                </div> */}
            {/* Drop at the top left that, with options version 1, version 2, and version 3. when a version is selected, use a  */}
            <select
              className=' rounded bg-slate-100 px-10 py-1 text-sm'
              onChange={(e) => {
                setVersion(e.target.value);
              }}
            >
              <option value='1'>Version Shagun</option>
              <option value='2'>Version Kristina</option>
              <option value='3'>Version Ainazik</option>
            </select>
            {/* Button at the top right to save all the data from the local storage into an object-array item like this: adjective:[] */}
            <div className=''>
              <button
                className='rounded bg-slate-100 px-3 py-1 text-sm'
                onClick={() => {
                  const data = {
                    adjective1: localStorage.getItem('adjectives1' + version),
                    adjective2: localStorage.getItem('adjectives2' + version),
                    adjective3: localStorage.getItem('adjectives3' + version),
                    adverb1: localStorage.getItem('adverb1' + version),
                    adverb2: localStorage.getItem('adverb2' + version),
                    adverb3: localStorage.getItem('adverb3' + version),
                    noun1: localStorage.getItem('noun1' + version),
                    noun2: localStorage.getItem('noun2' + version),
                    noun3: localStorage.getItem('noun3' + version),
                    preposition1: localStorage.getItem(
                      'preposition1' + version
                    ),
                    preposition2: localStorage.getItem(
                      'preposition2' + version
                    ),
                    preposition3: localStorage.getItem(
                      'preposition3' + version
                    ),
                    verb1: localStorage.getItem('verb1' + version),
                    verb2: localStorage.getItem('verb2' + version),
                    verb3: localStorage.getItem('verb3' + version),
                  };

                  console.log(data);

                  //copy to clipboard
                  navigator.clipboard.writeText(JSON.stringify(data));
                }}
              >
                Finalize Data
              </button>
            </div>
            {/* Text at the top left that shows the total count of words in all
              the lists */}
            <div className=''>
              <div className='rounded bg-slate-100 px-3 py-1 text-sm'>
                Words in POS:{' '}
                {syllable1.length + syllable2.length + syllable3.length}
              </div>
            </div>

            {/* Current bookmark item */}
            <div>
              {bookmark && (
                <div className='rounded bg-slate-100 px-3 py-1 text-sm'>
                  Last Moved: {bookmark.word} from {bookmark.pos} in syllable{' '}
                  {bookmark.syllable}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className='ml-52 bg-white'>
          <div className=' relative flex min-h-screen flex-col items-center  py-12 text-center'>
            {/* <Vercel className='text-5xl' /> */}
            <h3 className='mt-4'>
              Password Dataset (Version{' '}
              {version == '1'
                ? 'Shagun'
                : version == '2'
                ? 'Kristina'
                : 'Ainazik'}
              )
            </h3>
            {/* Dropdown list */}
            <div>
              <div className='mt-5 text-sm'>
                <select
                  className='w-36 rounded bg-slate-100 px-3 py-1'
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
            </div>

            <div className='flex flex-wrap gap-10'>
              {/*  1 syllable list */}

              <div className='mt-10 w-96'>
                <div className=''>
                  1 Syllable ({syllable1.length})
                  {/* Button that copies all the value in the list to the clipboard */}
                  <button
                    className='ml-5 rounded bg-slate-100 px-3 py-1 text-xs'
                    onClick={() => {
                      //Copy the data to clipboard in format noun = []
                      navigator.clipboard.writeText(
                        syllable1.map((word) => word).join('","')
                      );
                    }}
                  >
                    Copy to Clipboard
                  </button>
                </div>
                <div className='mt-5 flex flex-col'>
                  {syllable1.map((word, index) => (
                    <div
                      key={index}
                      className={`group flex w-full cursor-pointer items-center gap-5 rounded py-1 px-3 hover:bg-slate-100 `}
                    >
                      {/* Show svg if the bookmarked word is this item */}
                      {bookmark?.pos == list &&
                        bookmark?.syllable == '1' &&
                        bookmark?.index == index && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        )}

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

                          //Set as current bookmark which includes the pos we're on, the index of the word, and the word itself to local storage
                          localStorage.setItem(
                            'bookmark',
                            JSON.stringify({
                              pos: list,
                              syllable: '1',
                              index: index,
                              word: word,
                            })
                          );

                          setBookmark({
                            pos: list,
                            syllable: '1',
                            index: index,
                            word: word,
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
                          localStorage.setItem(
                            'bookmark',
                            JSON.stringify({
                              pos: list,
                              syllable: '1',
                              index: index,
                              word: word,
                            })
                          );
                          setBookmark({
                            pos: list,
                            syllable: '1',
                            index: index,
                            word: word,
                          });
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
                <div className=''>
                  2 Syllables ({syllable2.length})
                  <button
                    className='ml-5 rounded bg-slate-100 px-3 py-1 text-xs'
                    onClick={() => {
                      //Copy the data to clipboard in format noun = []
                      navigator.clipboard.writeText(
                        syllable2.map((word) => word).join('","')
                      );
                    }}
                  >
                    Copy to Clipboard
                  </button>
                </div>
                <div className=' mt-5 flex flex-col'>
                  {syllable2.map((word, index) => (
                    <div
                      key={index}
                      className={`group flex w-full cursor-pointer items-center gap-5 rounded py-1 px-3 hover:bg-slate-100 `}
                    >
                      {bookmark?.pos == list &&
                        bookmark?.syllable == '2' &&
                        bookmark?.index == index && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        )}

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
                          localStorage.setItem(
                            'bookmark',
                            JSON.stringify({
                              pos: list,
                              syllable: '2',
                              index: index,
                              word: word,
                            })
                          );
                          setBookmark({
                            pos: list,
                            syllable: '2',
                            index: index,
                            word: word,
                          });
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
                          localStorage.setItem(
                            'bookmark',
                            JSON.stringify({
                              pos: list,
                              syllable: '2',
                              index: index,
                              word: word,
                            })
                          );
                          //Delete word from list
                          const newAdjective1 = syllable2.filter(
                            (item, i) => i !== index
                          );
                          setBookmark({
                            pos: list,
                            syllable: '2',
                            index: index,
                            word: word,
                          });
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
                <div className=''>
                  3 Syllables ({syllable3.length})
                  <button
                    className='ml-5 rounded bg-slate-100 px-3 py-1 text-xs'
                    onClick={() => {
                      //Copy the data to clipboard in format noun = []
                      navigator.clipboard.writeText(
                        syllable3.map((word) => word).join('","')
                      );
                    }}
                  >
                    Copy to Clipboard
                  </button>
                </div>
                <div className=' mt-5 flex flex-col'>
                  {syllable3.map((word, index) => (
                    <div
                      key={index}
                      className={`group flex w-full cursor-pointer items-center gap-5 rounded py-1 px-3 hover:bg-slate-100 `}
                    >
                      {bookmark?.pos == list &&
                        bookmark?.syllable == '3' &&
                        bookmark?.index == index && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        )}

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
                          setBookmark({
                            pos: list,
                            syllable: '3',
                            index: index,
                            word: word,
                          });
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
                          localStorage.setItem(
                            'bookmark',
                            JSON.stringify({
                              pos: list,
                              syllable: '3',
                              index: index,
                              word: word,
                            })
                          );
                          setBookmark({
                            pos: list,
                            syllable: '3',
                            index: index,
                            word: word,
                          });
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
                          localStorage.setItem(
                            'bookmark',
                            JSON.stringify({
                              pos: list,
                              syllable: '3',
                              index: index,
                              word: word,
                            })
                          );
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
                        2S
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
