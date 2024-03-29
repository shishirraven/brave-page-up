<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div id="scroll-to-top-container" style="bottom: <?php echo $attributes['posUpDown']; ?>px; <?php echo $attributes['posLeftRight'] . ': ' . $attributes['posLeftRightPx']; ?>px; z-index: <?php echo $attributes['zIndex']; ?>" <?php echo get_block_wrapper_attributes(); ?>>
    <!-- Your existing content goes here -->
    <div id="scroll-to-top-button" title="Scroll to Top">
        <?php echo wp_kses_post( html_entity_decode( $content ) ); ?>
    </div>
</div>

