import React from 'react'
import useTranslation from 'next-translate/useTranslation'
export default function Home() {
  const { t, lang } = useTranslation();
  return (
    <div>
      <p>
        {t('common:WorksC1.desc')}
      </p>
    </div>
  )
}
