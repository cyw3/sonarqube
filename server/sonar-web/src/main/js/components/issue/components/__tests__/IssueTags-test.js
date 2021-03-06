/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { shallow } from 'enzyme';
import React from 'react';
import IssueTags from '../IssueTags';
import { click } from '../../../../helpers/testUtils';

const issue = {
  key: 'issuekey',
  projectOrganization: 'foo',
  tags: ['mytag', 'test']
};

it('should render without the action when the correct rights are missing', () => {
  const element = shallow(
    <IssueTags
      canSetTags={false}
      isOpen={false}
      issue={{
        transitions: [],
        status: 'CLOSED'
      }}
      onFail={jest.fn()}
      onIssueChange={jest.fn()}
      togglePopup={jest.fn()}
    />
  );
  expect(element).toMatchSnapshot();
});

it('should render with the action', () => {
  const element = shallow(
    <IssueTags
      canSetTags={true}
      isOpen={false}
      issue={issue}
      onFail={jest.fn()}
      onIssueChange={jest.fn()}
      togglePopup={jest.fn()}
    />
  );
  expect(element).toMatchSnapshot();
});

it('should open the popup when the button is clicked', () => {
  const toggle = jest.fn();
  const element = shallow(
    <IssueTags
      canSetTags={true}
      isOpen={false}
      issue={issue}
      onFail={jest.fn()}
      onIssueChange={jest.fn()}
      togglePopup={toggle}
    />
  );
  click(element.find('button'));
  expect(toggle.mock.calls).toMatchSnapshot();
  element.setProps({ isOpen: true });
  expect(element).toMatchSnapshot();
});
