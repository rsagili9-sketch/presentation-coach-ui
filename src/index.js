/* Presentation Coach UI — React 18 components, no build step. Loads as a classic script and assigns window.PresentationCoach. */
(function () {
  var React = window.React, h = React.createElement;
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var clock = function (s) { s = Math.max(0, Math.round(s)); return pad(Math.floor(s / 60)) + ':' + pad(s % 60); };
  var short = function (s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + pad(s % 60); };
  var have = function (v) { return v !== null && v !== undefined; };
  var signed = function (n) { return (n > 0 ? '+' : n < 0 ? '−' : '') + Math.abs(n); };
  var Unavailable = function () { return h('span', { className: 'pc-muted' }, 'Unavailable'); };

  function Button(p) {
    var variant = p.variant || 'primary', rest = Object.assign({}, p);
    delete rest.variant;
    return h('button', Object.assign({ type: 'button' }, rest, { className: 'pc-btn pc-btn-' + variant }), p.children);
  }

  function Notice(p) {
    return h('div', { className: 'pc-notice', role: 'status' }, h('b', null, p.lead + ' '), p.children);
  }

  function SessionTimer(p) {
    var min = p.targetMin || 600, max = p.targetMax || 720, track = p.trackMax || 900, e = p.elapsed;
    var status = e < min ? short(min - e) + ' until the ' + short(min) + ' target'
      : e <= max ? 'In target · ' + short(max - e) + ' left' : null;
    var pct = function (s) { return Math.min(100, (s / track) * 100); };
    return h('div', { className: 'pc-card' },
      h('div', { className: 'pc-row', style: { justifyContent: 'space-between' } },
        h('span', { className: 'pc-timer-time' }, clock(e)),
        status ? h('span', { className: 'pc-muted' }, status) : h('b', { className: 'pc-down' }, short(e - max) + ' over')),
      h('div', { className: 'pc-track', style: { margin: '12px 0 4px' } },
        h('div', { className: 'pc-zone', style: { left: pct(min) + '%', width: pct(max - min) + '%' } }),
        h('div', { className: 'pc-fill', style: { width: 'calc(' + pct(e) + '% - 4px)' } })),
      h('div', { className: 'pc-ticks' }, h('span', null, '0:00'), h('span', null, short(min) + ' – ' + short(max) + ' target'), h('span', null, short(track))));
  }

  function RubricRow(p) {
    var id = React.useId(), set = function (k, v) { p.onChange && p.onChange(Object.assign({}, p.value, { [k]: v })); };
    var v = p.value || {};
    var field = function (k, label, el) { return h('div', null, h('label', { className: 'pc-label', htmlFor: id + k }, label), el); };
    return h('div', { className: 'pc-card' },
      h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 96px', gap: 12 } },
        field('n', 'Criterion', h('input', { id: id + 'n', className: 'pc-input', value: v.name || '', onChange: function (e) { set('name', e.target.value); } })),
        field('p', 'Max points', h('input', { id: id + 'p', className: 'pc-input', inputMode: 'numeric', value: v.maxPoints == null ? '' : v.maxPoints, required: true, onChange: function (e) { set('maxPoints', e.target.value); } }))),
      h('div', { style: { marginTop: 12 } },
        field('d', 'Description', h('textarea', { id: id + 'd', className: 'pc-input', value: v.description || '', onChange: function (e) { set('description', e.target.value); } }))),
      h('div', { className: 'pc-row', style: { justifyContent: 'flex-end', marginTop: 8 } },
        h(Button, { variant: 'text', onClick: p.onRemove }, 'Remove ×')));
  }

  function CriterionCard(p) {
    var ok = p.assessable !== false && have(p.earned);
    return h('div', { className: 'pc-card' },
      h('div', { className: 'pc-row', style: { justifyContent: 'space-between' } },
        h('h3', { className: 'heading-3' }, p.name),
        ok ? h('span', { className: 'pc-stat', style: { fontSize: 24 } }, p.earned + ' ', h('span', { className: 'pc-muted', style: { fontSize: 15, fontFamily: 'var(--font-sans)' } }, '/ ' + p.max))
           : h('b', { className: 'pc-muted' }, 'Not assessable')),
      ok && h('div', { className: 'pc-bar', style: { margin: '8px 0 12px' } }, h('i', { style: { width: (p.earned / p.max) * 100 + '%' } })),
      h('div', { className: 'pc-label', style: { marginTop: ok ? 0 : 8 } }, 'AI comment'),
      h('p', { style: { margin: '4px 0 12px' }, className: ok ? '' : 'pc-muted' }, p.explanation),
      ok && p.quote && h('div', { className: 'pc-quote' }, h('span', { className: 'pc-ts' }, p.quote.time), ' “' + p.quote.text + '”'));
  }

  function Metric(p) {
    return h('div', null, h('div', { className: 'pc-stat' }, have(p.value) ? p.value : 'Unavailable'),
      h('div', { className: 'caption pc-muted' }, p.label));
  }

  function DeltaRow(p) {
    var miss = !have(p.from) || !have(p.to);
    var arrow = miss ? null : p.better ? ['↑', 'pc-up'] : ['↓', 'pc-down'];
    return h('div', { className: 'pc-take', style: { gridTemplateColumns: '1fr auto auto' } },
      h('span', null, p.label),
      h('span', { className: 'pc-muted' }, miss ? h(Unavailable) : p.from + ' → ' + p.to + (p.unit ? ' ' + p.unit : '')),
      arrow ? h('span', { className: arrow[1] }, arrow[0] + ' ' + p.change) : h('span', { className: 'pc-muted' }, '—'));
  }

  function CompareChart(p) {
    var labels = p.labels || ['Take 1', 'Take 2'];
    var bar = function (cls, label, v, max) {
      return h('div', { className: 'pc-chart-bar' }, h('span', null, label),
        have(v) ? [h('i', { key: 'i', className: cls, style: { width: (v / max) * 100 + '%' } }), h('b', { key: 'b' }, v)] : h(Unavailable));
    };
    return h('div', { className: 'pc-card' }, h('div', { className: 'pc-label' }, 'Points by criterion'),
      h('div', { style: { display: 'grid', gap: 16, marginTop: 12 } }, p.criteria.map(function (c) {
        var d = have(c.a) && have(c.b) ? c.b - c.a : null;
        return h('div', { className: 'pc-chart-row', key: c.name },
          h('div', { className: 'pc-row', style: { justifyContent: 'space-between' } }, h('span', null, c.name),
            d === null ? null : h('span', { className: d >= 0 ? 'pc-up' : 'pc-down' }, (d >= 0 ? '↑ ' : '↓ ') + signed(d))),
          bar('pc-a', labels[0], c.a, c.max), bar('pc-b', labels[1], c.b, c.max));
      })));
  }

  function TakeRow(p) {
    return h('div', { className: 'pc-take' },
      h('input', { className: 'pc-check', type: 'checkbox', 'aria-label': 'Select ' + p.name, checked: !!p.selected, onChange: p.onSelect || function () {} }),
      h('div', null, h('div', null, h('b', null, p.name), ' · ' + p.date),
        h('div', { className: 'caption pc-muted' }, (p.rubric || 'No rubric · Provisional') + ' · ' + p.duration)),
      h('div', { style: { textAlign: 'right' } },
        h('span', { className: 'pc-serif', style: { fontSize: 24 } }, have(p.score) ? p.score + ' / ' + p.max : 'Unavailable'),
        h('div', null, h('a', { href: '#', className: 'pc-ts', onClick: p.onOpen }, 'Open'))));
  }

  window.PresentationCoach = { Button: Button, Notice: Notice, SessionTimer: SessionTimer, RubricRow: RubricRow, CriterionCard: CriterionCard, Metric: Metric, DeltaRow: DeltaRow, CompareChart: CompareChart, TakeRow: TakeRow };
})();
