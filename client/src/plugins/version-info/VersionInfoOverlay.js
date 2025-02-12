/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React from 'react';

import { Overlay } from '../../shared/ui';

import { ReleaseInfo } from './ReleaseInfo';

import css from './VersionInfoOverlay.less';

const RELEASE_NOTES_LINK = 'https://github.com/GalliumWang';
const DOCS_LINK = 'https://docs.camunda.org/manual/latest/modeler/';
const CHANGELOG_LINK = 'https://github.com/camunda/camunda-modeler/blob/master/CHANGELOG.md';

const OFFSET = { right: 0 };

export function VersionInfoOverlay(props) {
  return (
    <Overlay
      id="version-info-overlay" anchor={ props.anchor } onClose={ props.onClose } offset={ OFFSET }
      className={ css.VersionInfoOverlay }
    >
      <Overlay.Title>
        { props.version } 功能更新
      </Overlay.Title>
      <Overlay.Body>
        <ReleaseInfo />
      </Overlay.Body>
      <LearnMore />
    </Overlay>
  );
}

function LearnMore(props) {
  return (
    <Overlay.Footer>
      <h2 className="overlay__title">
        更多
      </h2>
      <ul>
        <li><a href={ RELEASE_NOTES_LINK }>Github</a></li>
      </ul>
    </Overlay.Footer>
  );
}
