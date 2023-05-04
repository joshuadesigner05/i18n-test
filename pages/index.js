import React from 'react'
import Link from 'next/link';

import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
const { locales } = i18nConfig;

export default function Home() {

  // This is normal usage

  const { t, lang } = useTranslation();

  // This is ChatGPT usage
  // const { t, lang } = useTranslation('common', { ns: 'homeAbout' });


  const items = t("common:test", { returnObjects: true });
  const items2 = t("common:test-2", { returnObjects: true });

  return locales.map((lng) => {
    if (lng === lang) return null
    return (
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col border-2 border-white'>
          <Link href="/" locale={lng} key={lng}>
            {t(`layout:language-name-${lng}`)}
          </Link>
        </div>

        {/* This method doesn't work naturally anyway.  */}
        <div className='flex flex-col border-2 border-white'>
          {t('common:test.name')}
          <span>Please refer to the source code to view the notes.</span>
        </div>


        {/* If I use this method I get the error TypeError: items.map is not a function.  */}
        <div className='flex flex-col border-2 border-white'>
          {/* {items.map((item) => (
        <div key={item.name}>
          <span>{item.name}</span>
        </div>
      ))} */}
          <span>Please refer to the source code to view the notes.</span>
        </div>

        {/* If I use this method I get the error TypeError: items2.map is not a function. Actually, it's not a map anyway.  */}
        <div className='flex flex-col border-2 border-white'>
          {/* {items2.map((item) => (
          <div key={item.name}>
            <span>{item.name}</span>
          </div>
        ))} */}
          <span>Please refer to the source code to view the notes.</span>
        </div>

        {/* This method was ChatGPT suggestion. But that didn't produce any results either.  */}
        <div className='flex flex-col border-2 border-white'>
          {/* {t('list', { returnObjects: true }).map((item, index) => (
          <div key={index}>
            <div className="card-title">{item.title}</div>
          </div>
        ))} */}
          <span>Please refer to the source code to view the notes.</span>
        </div>

        {/* This is successful.  */}

        <div className='flex flex-col border-2 border-white'>
          {t('common:test-2.subTest-1.name')}
        </div>


      </div>
    )
  })
}
