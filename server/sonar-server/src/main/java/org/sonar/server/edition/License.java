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
package org.sonar.server.edition;

import com.google.common.collect.ImmutableList;
import java.util.List;
import javax.annotation.concurrent.Immutable;

import static java.util.Objects.requireNonNull;

@Immutable
public class License {
  private final String editionKey;
  private final List<String> pluginKeys;
  private final String content;

  public License(String editionKey, List<String> pluginKeys, String content) {
    this.editionKey = requireNonNull(editionKey, "editionKey can't be null");
    this.pluginKeys = ImmutableList.copyOf(pluginKeys);
    this.content = requireNonNull(content, "content can't be null");
  }

  public String getEditionKey() {
    return editionKey;
  }

  public List<String> getPluginKeys() {
    return pluginKeys;
  }

  public String getContent() {
    return content;
  }
}
