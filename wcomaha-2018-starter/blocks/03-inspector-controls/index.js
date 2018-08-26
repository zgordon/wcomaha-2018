/**
 * Block dependencies
 */

/**
 * Internal block libraries
 */


/**
  * Register block
 */
export default registerBlockType(
    'jsforwpblocks/inspector-controls',
    {
        title: __( 'Example - Inspector Controls', 'jsforwpblocks' ),
        description: __( 'An example of how to use the Inspector component for a block.', 'jsforwpblocks'),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icons.sidebar,
        },                 
        keywords: [
            __( 'Button', 'jsforwpblocks' ),
            __( 'Settings', 'jsforwpblocks' ),
            __( 'Controls', 'jsforwpblocks' ),
        ],
        attributes: {
        },
        edit: props => {
            return [
            ];
        },
        save: props => {
        },
    },
);
