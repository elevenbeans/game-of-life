'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Pannel from './pannel';
import LOCALES from '../i18n';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locale: 'zh' };
  }

  toggleLang() {
    this.setState(function(prevState) {
      return { locale: prevState.locale === 'en' ? 'zh' : 'en' };
    });
  }

  render() {
    var that = this;
    var t = LOCALES[this.state.locale];
    var other = this.state.locale === 'en' ? 'zh' : 'en';

    return (
      <div className="page">
        <header className="site-header">
          <h1>{t.title}</h1>
          <p className="subtitle">
            {t.subtitle}
            <button className="lang-toggle" onClick={function() { that.toggleLang(); }}>
              {other === 'en' ? 'EN' : '\u4E2D\u6587'}
            </button>
          </p>
        </header>
        <Pannel locale={this.state.locale} />
        <section className="about">
          <h2>{t.aboutHeading}</h2>
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <div className="rules">
            <div className="rule">
              <div className="rule-title">
                <span className="rule-icon" style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4D4D4' }} />
                {t.ruleBirth}
              </div>
              <div className="rule-desc">{t.ruleBirthDesc}</div>
            </div>
            <div className="rule">
              <div className="rule-title">
                <span className="rule-icon" style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4D4D4' }} />
                {t.ruleSurvival}
              </div>
              <div className="rule-desc">{t.ruleSurvivalDesc}</div>
            </div>
            <div className="rule">
              <div className="rule-title">
                <span className="rule-icon" style={{ backgroundColor: '#E8E8E8', border: '1px solid #D4D4D4' }} />
                {t.ruleDeath}
              </div>
              <div className="rule-desc">{t.ruleDeathDesc}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(React.createElement(App));
