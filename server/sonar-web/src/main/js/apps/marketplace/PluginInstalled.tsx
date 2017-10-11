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
import * as React from 'react';
import PluginDescr from './PluginDescr';
import PluginLicense from './PluginLicense';
import PluginStatus from './PluginStatus';
import PluginOrganization from './PluginOrganization';
import PluginUpdates from './PluginUpdates';
import { PluginInstalled } from '../../api/plugins';
import { translate } from '../../helpers/l10n';

interface Props {
  plugin: PluginInstalled;
  refreshPending: () => {};
  status?: string;
  updateQuery: (newQuery: { [key: string]: any }) => void;
}

export default function PluginInstalled({ plugin, refreshPending, status, updateQuery }: Props) {
  return (
    <tr>
      <PluginDescr plugin={plugin} updateQuery={updateQuery} />
      <td className="text-top big-spacer-right">
        <ul>
          <li className="little-spacer-bottom">
            <strong className="js-plugin-installed-version little-spacer-right">
              {plugin.version}
            </strong>
            {translate('marketplace._installed')}
          </li>
          <PluginUpdates updates={plugin.updates} />
        </ul>
      </td>

      <td className="text-top width-20 big-spacer-right">
        <ul>
          {(plugin.homepageUrl || plugin.issueTrackerUrl) && (
            <li className="little-spacer-bottom">
              <ul className="list-inline">
                {plugin.homepageUrl && (
                  <li>
                    <a className="js-plugin-homepage" href={plugin.homepageUrl} target="_blank">
                      {translate('marketplace.homepage')}
                    </a>
                  </li>
                )}
                {plugin.issueTrackerUrl && (
                  <li>
                    <a className="js-plugin-issues" href={plugin.issueTrackerUrl} target="_blank">
                      {translate('marketplace.issue_tracker')}
                    </a>
                  </li>
                )}
              </ul>
            </li>
          )}
          <PluginLicense license={plugin.license} />
          <PluginOrganization plugin={plugin} />
        </ul>
      </td>

      <PluginStatus plugin={plugin} status={status} refreshPending={refreshPending} />
    </tr>
  );
}
