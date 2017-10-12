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

/**
 * Provides access to operations which will alter the Edition management state.
 */
public interface MutableEditionManagementState extends EditionManagementState {
  /**
   * @return the new {@link PendingStatus}, always {@link PendingStatus#AUTOMATIC_IN_PROGRESS}
   *         an exception.
   *
   * @throws IllegalStateException if current status is not {@link PendingStatus#NONE}
   */
  PendingStatus startAutomaticInstallation(License license);

  /**
   * @return the new {@link PendingStatus}, always {@link PendingStatus#MANUAL_IN_PROGRESS}
   *         an exception.
   *
   * @throws IllegalStateException if current status is not {@link PendingStatus#NONE}
   */
  PendingStatus startManualInstallation(License license);

  /**
   * @return the new pending status, always {@link PendingStatus#AUTOMATIC_READY}
   *
   * @throws IllegalStateException if current status is not {@link PendingStatus#AUTOMATIC_IN_PROGRESS}
   */
  PendingStatus automaticInstallationReady();

  /**
   * @return the new pending status, always {@link PendingStatus#NONE}
   *
   * @throws IllegalStateException if current status is neither {@link PendingStatus#AUTOMATIC_READY} nor
   *         {@link PendingStatus#MANUAL_IN_PROGRESS}
   */
  PendingStatus finalizeInstallation();
}
