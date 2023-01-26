<?php


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'groomwithlove' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!?`Ym*9IkXC5Ll&Xraem9Mh[PmlQj3taB=Lm8f+`Om4#k[]g(i Wm#[^pK08MKe]' );
define( 'SECURE_AUTH_KEY',  '.5.U(}*7(|fOA7i$%f^5q+5<JDaD) T23(0 QoALl>MgW:.mTa^XoAU%QdGiU:y7' );
define( 'LOGGED_IN_KEY',    'n&5.q2U~J_Gn$^0/0,Pz-8G#Q3t_p.#A:Js]<7;Hl:39$5*Xkn+%*}Ki9,rWNV53' );
define( 'NONCE_KEY',        '9A<GvdaONY8Qv^;J]l+$$C{sc(1|Z{qw8C8/JrgHgmq5MV+i@H_TWeBp8<<80I=r' );
define( 'AUTH_SALT',        '>! %:aLU#XW T0%s@nVi:s5`{eD$ncVnNzo}!>5!<^R7b#wC@@u?eX9;Jf7p+:pz' );
define( 'SECURE_AUTH_SALT', 'zS(I]ng$|tn/zG3PQZ(u=KE%4i]%d38U5,0kYL}njEa[N*y`GGR=f@BsQJMd,EC!' );
define( 'LOGGED_IN_SALT',   'ml|aauW(y(cjTwPa}@!IR$htH~-:#ZLum6 Z16>Tz1PCQvsKM`p$0W`I-4_?4j:#' );
define( 'NONCE_SALT',       'sE)V~ttM!lay`fIZ]Q?yETe*#O T;PR|#ED:_mS w}g3iCS[gL K%^mhS9rZj:S]' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

if ( ! defined( 'WP_DEBUG' ) ) {
    define( 'WP_DEBUG', true );
}
// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
