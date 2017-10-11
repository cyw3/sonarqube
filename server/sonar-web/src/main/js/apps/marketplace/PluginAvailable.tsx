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
import PluginOrganization from './PluginOrganization';
import PluginStatus from './PluginStatus';
import PluginChangeLogButton from './PluginChangeLogButton';
import { PluginAvailable } from '../../api/plugins';
import { translateWithParameters } from '../../helpers/l10n';

interface Props {
  plugin: PluginAvailable;
  refreshPending: () => {};
  status?: string;
  updateQuery: (newQuery: { [key: string]: any }) => void;
}

export default function PluginAvailable({ plugin, refreshPending, status, updateQuery }: Props) {
  return (
    <tr>
      <PluginDescr plugin={plugin} updateQuery={updateQuery} />
      <td className="text-top big-spacer-right">
        <ul>
          <li className="diplay-flex-row little-spacer-bottom">
            <div className="pull-left spacer-right">
              <span className="badge badge-success">{plugin.release.version}</span>
            </div>
            <div>
              {plugin.release.description}
              <PluginChangeLogButton release={plugin.release} update={plugin.update} />
              {plugin.update.requires.length > 0 && (
                <p className="little-spacer-top">
                  <strong>
                    {translateWithParameters(
                      'marketplace.installing_this_plugin_will_also_install_x',
                      plugin.update.requires.map(requiredPlugin => requiredPlugin.name).join(', ')
                    )}
                  </strong>
                </p>
              )}
            </div>
          </li>
        </ul>
      </td>

      <td className="text-top width-20 big-spacer-right">
        <ul>
          <PluginLicense license={plugin.license} />
          <PluginOrganization plugin={plugin} />
        </ul>
      </td>

      <PluginStatus plugin={plugin} status={status} refreshPending={refreshPending} />
    </tr>
  );
}