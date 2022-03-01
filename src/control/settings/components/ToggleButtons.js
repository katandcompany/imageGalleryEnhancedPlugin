import React from 'react';

function ToggleButtons({
  settingName,
  onLabel,
  onValue,
  offLabel,
  offValue,
  currentValue,
  eventListener
}) {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className={`btn btn--lg ${currentValue === onValue ? 'btn--primary' : 'btn--info'}`}>
        <input type="radio" name={settingName} id={settingName} value={onValue} checked={currentValue === onValue} onChange={eventListener} /> {onLabel}
      </label>
      <label className={`btn btn--lg ${currentValue === offValue ? 'btn--primary' : 'btn--info'}`}>
        <input type="radio" name={settingName} id={settingName} value={offValue} checked={currentValue === offValue} onChange={eventListener} /> {offLabel}
      </label>
    </div>
  );
}

export default ToggleButtons;

/*
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio
  </label>
</div>
*/
