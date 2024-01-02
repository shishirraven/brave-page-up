import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, RadioControl } from "@wordpress/components";
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({});
    const innerBlocksProps = useInnerBlocksProps(blockProps, {});

    const inputPosUpDown = (newInput) => {
        setAttributes({ posUpDown: newInput });
    };

    const inputPosLeftRight = (newInput) => {
        setAttributes({ posLeftRight: newInput });
    };

    return (
        <>
            <div {...innerBlocksProps}></div>

            <InspectorControls>
                <PanelBody title="Position {Bottom To Top}">
                    <TextControl
                        type='number'
                        label="In Pixels"
                        value={attributes.posUpDown}
                        onChange={inputPosUpDown}
                    />
                </PanelBody>
                <PanelBody title="Position">
                    <RadioControl
                        selected={attributes.posLeftRight}
                        options={[
                            { label: 'Left', value: 'left' },
                            { label: 'Right', value: 'right' },
                        ]}
                        onChange={inputPosLeftRight}
                    />
                    <TextControl
                        type='number'
                        label="In Pixels"
                        value={attributes.posLeftRightPx}
                        onChange={(newInput) => setAttributes({ posLeftRightPx: newInput })}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
}
