/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The interface for an object that owns a block's rendering SVG
 * elements.
 *
 * @namespace Blockly.blockRendering.IPathObject
 */
import * as goog from '../../../closure/goog/goog.js';
goog.declareModuleId('Blockly.blockRendering.IPathObject');

import type {BlockStyle} from '../../theme.js';

import type {ConstantProvider} from './constants.js';


/**
 * An interface for a block's path object.
 *
 * @param _root The root SVG element.
 * @param _constants The renderer's constants.
 * @alias Blockly.blockRendering.IPathObject
 */
export interface IPathObject {
  /** The primary path of the block. */
  svgPath: SVGElement;

  /** The renderer's constant provider. */
  constants: ConstantProvider;

  /** The primary path of the block. */
  style: BlockStyle;

  /**
   * Holds the cursors SVG element when the cursor is attached to the block.
   * This is null if there is no cursor on the block.
   */
  cursorSvg: SVGElement;

  /**
   * Holds the markers SVG element when the marker is attached to the block.
   * This is null if there is no marker on the block.
   */
  markerSvg: SVGElement;

  /**
   * Set the path generated by the renderer onto the respective SVG element.
   *
   * @param pathString The path.
   * @internal
   */
  setPath: AnyDuringMigration;

  /**
   * Apply the stored colours to the block's path, taking into account whether
   * the paths belong to a shadow block.
   *
   * @param block The source block.
   * @internal
   */
  applyColour: AnyDuringMigration;

  /**
   * Update the style.
   *
   * @param blockStyle The block style to use.
   * @internal
   */
  setStyle: AnyDuringMigration;

  /**
   * Flip the SVG paths in RTL.
   *
   * @internal
   */
  flipRTL: () => void;

  /**
   * Add the cursor SVG to this block's SVG group.
   *
   * @param cursorSvg The SVG root of the cursor to be added to the block SVG
   *     group.
   * @internal
   */
  setCursorSvg: AnyDuringMigration;

  /**
   * Add the marker SVG to this block's SVG group.
   *
   * @param markerSvg The SVG root of the marker to be added to the block SVG
   *     group.
   * @internal
   */
  setMarkerSvg: AnyDuringMigration;

  /**
   * Set whether the block shows a highlight or not.  Block highlighting is
   * often used to visually mark blocks currently being executed.
   *
   * @param highlighted True if highlighted.
   * @internal
   */
  updateHighlighted: AnyDuringMigration;

  /**
   * Add or remove styling showing that a block is selected.
   *
   * @param enable True if selection is enabled, false otherwise.
   * @internal
   */
  updateSelected: AnyDuringMigration;

  /**
   * Add or remove styling showing that a block is dragged over a delete area.
   *
   * @param enable True if the block is being dragged over a delete area, false
   *     otherwise.
   * @internal
   */
  updateDraggingDelete: AnyDuringMigration;

  /**
   * Add or remove styling showing that a block is an insertion marker.
   *
   * @param enable True if the block is an insertion marker, false otherwise.
   * @internal
   */
  updateInsertionMarker: AnyDuringMigration;

  /**
   * Add or remove styling showing that a block is movable.
   *
   * @param enable True if the block is movable, false otherwise.
   * @internal
   */
  updateMovable: AnyDuringMigration;

  /**
   * Add or remove styling that shows that if the dragging block is dropped,
   * this block will be replaced.  If a shadow block, it will disappear.
   * Otherwise it will bump.
   *
   * @param enable True if styling should be added.
   * @internal
   */
  updateReplacementFade: AnyDuringMigration;

  /**
   * Add or remove styling that shows that if the dragging block is dropped,
   * this block will be connected to the input.
   *
   * @param conn The connection on the input to highlight.
   * @param enable True if styling should be added.
   * @internal
   */
  updateShapeForInputHighlight: AnyDuringMigration;
}
