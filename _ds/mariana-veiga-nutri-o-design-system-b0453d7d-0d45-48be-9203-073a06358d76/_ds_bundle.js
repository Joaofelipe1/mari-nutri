/* @ds-bundle: {"format":4,"namespace":"MarianaVeigaNutriODesignSystem_b0453d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"MacroBar","sourcePath":"components/data/MacroBar.jsx"},{"name":"ProgressRing","sourcePath":"components/data/ProgressRing.jsx"},{"name":"StatTile","sourcePath":"components/data/StatTile.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"36e395c0ead0","components/core/Button.jsx":"5b27c8a96a51","components/core/Card.jsx":"09f57429d254","components/core/Icon.jsx":"0039938d5e97","components/core/IconButton.jsx":"af8ca48be722","components/core/Tag.jsx":"826552e29ba1","components/data/MacroBar.jsx":"8eafa01e548d","components/data/ProgressRing.jsx":"c62d6b979e0d","components/data/StatTile.jsx":"33c9872aec5d","components/feedback/Dialog.jsx":"7f0c130a3b78","components/feedback/Toast.jsx":"2e2f40c89900","components/feedback/Tooltip.jsx":"bd27d51bbf20","components/forms/Checkbox.jsx":"3a4733a83517","components/forms/Field.jsx":"4b7ba187f682","components/forms/Input.jsx":"f3f713d3d4ab","components/forms/Radio.jsx":"e57d63337ce7","components/forms/Select.jsx":"5ebf088414d3","components/forms/Switch.jsx":"68fa18796861","components/forms/Textarea.jsx":"1c43a611307d","components/navigation/SideNav.jsx":"55fb15d1602f","components/navigation/SiteHeader.jsx":"0a0bf7fb0375","components/navigation/Tabs.jsx":"9054cc061d34","ui_kits/app/App.jsx":"a4a7ffc4de19","ui_kits/website/Site.jsx":"bbbe8fde8f6d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MarianaVeigaNutriODesignSystem_b0453d = window.MarianaVeigaNutriODesignSystem_b0453d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  },
  soft: {
    background: 'var(--green-50)',
    border: '1px solid var(--green-100)',
    color: 'var(--text-body)'
  },
  sage: {
    background: 'var(--green-300)',
    border: '1px solid var(--green-300)',
    color: 'var(--green-900)'
  },
  deep: {
    background: 'var(--green-700)',
    border: '1px solid var(--green-700)',
    color: 'var(--text-inverse)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  }
};
const PAD = {
  none: 0,
  sm: 'var(--space-5)',
  md: 'var(--space-7)',
  lg: 'var(--space-8)'
};
function Card({
  tone = 'paper',
  padding = 'md',
  radius = 'lg',
  elevated,
  interactive,
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      borderRadius: `var(--radius-${radius})`,
      padding: PAD[padding],
      ...TONES[tone],
      boxShadow: elevated ? interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-md)' : interactive && hover ? 'var(--shadow-sm)' : 'none',
      transform: interactive && hover ? 'var(--motion-lift)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'box-shadow var(--duration-base) var(--ease-standard),transform var(--duration-base) var(--ease-standard)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const SIZES = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
function Icon({
  name,
  size = 'md',
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || 20;
  const url = `url("${BASE}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    role: "img"
  }, rest, {
    style: {
      display: 'inline-block',
      width: px,
      height: px,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--neutral-100)', 'var(--neutral-700)'],
  brand: ['var(--green-100)', 'var(--green-800)'],
  sage: ['var(--green-300)', 'var(--green-900)'],
  success: ['var(--success-bg)', 'var(--success)'],
  warning: ['var(--warning-bg)', 'var(--warning)'],
  danger: ['var(--danger-bg)', 'var(--danger)'],
  info: ['var(--info-bg)', 'var(--info)']
};
function Badge({
  tone = 'brand',
  icon,
  children,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: bg,
      color: fg,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '.02em',
      lineHeight: 1.4,
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-height-sm)',
  md: 'var(--control-height-md)',
  lg: 'var(--control-height-lg)'
};
const FS = {
  sm: 'var(--text-sm)',
  md: 'var(--text-base)',
  lg: 'var(--text-md)'
};
const PX = {
  sm: '14px',
  md: '20px',
  lg: '28px'
};
const VARIANTS = {
  primary: {
    background: 'var(--green-700)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--green-700)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--green-700)',
    border: '1px solid var(--green-700)'
  },
  sage: {
    background: 'var(--green-300)',
    color: 'var(--green-900)',
    border: '1px solid var(--green-300)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--green-700)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--neutral-0)',
    color: 'var(--green-800)',
    border: '1px solid var(--neutral-0)'
  }
};
const HOVER = {
  primary: 'var(--green-800)',
  secondary: 'var(--green-50)',
  sage: 'var(--green-400)',
  ghost: 'var(--green-50)',
  inverse: 'var(--green-50)'
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      height: H[size],
      padding: `0 ${PX[size]}`,
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-body)',
      fontSize: FS[size],
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '.01em',
      borderRadius: 'var(--control-radius)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),box-shadow var(--duration-base) var(--ease-standard)',
      transform: press && !disabled ? 'var(--motion-press)' : 'none',
      boxShadow: variant === 'primary' && hover && !disabled ? 'var(--shadow-md)' : 'none',
      ...v,
      background: hover && !disabled ? HOVER[variant] || v.background : v.background,
      ...style
    }
  }), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'lg' ? 'md' : 'sm'
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'lg' ? 'md' : 'sm'
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: 30,
  md: 38,
  lg: 46
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  label,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      width: S[size],
      height: S[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      border: variant === 'outline' ? '1px solid var(--border-subtle)' : '1px solid transparent',
      background: solid ? hover ? 'var(--green-800)' : 'var(--green-700)' : hover ? 'var(--green-50)' : 'transparent',
      color: solid ? 'var(--neutral-0)' : 'var(--green-700)',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 'sm' : 'md'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      cursor: onClick ? 'pointer' : 'default',
      border: '1px solid ' + (selected ? 'var(--green-700)' : 'var(--border-subtle)'),
      background: selected ? 'var(--green-700)' : hover && onClick ? 'var(--green-50)' : 'var(--surface-card)',
      color: selected ? 'var(--text-inverse)' : 'var(--neutral-700)',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .65
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/MacroBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MacroBar({
  label,
  value = 0,
  target = 100,
  unit = 'g',
  color = 'var(--green-700)',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / target));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--neutral-700)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, value, unit, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "/ ", target, unit))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--neutral-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct * 100 + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: color,
      transition: 'width var(--duration-slow) var(--ease-out-soft)'
    }
  })));
}
Object.assign(__ds_scope, { MacroBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MacroBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressRing({
  value = 0,
  max = 100,
  size = 104,
  thickness = 10,
  color = 'var(--green-700)',
  track = 'var(--green-100)',
  label,
  caption,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: `conic-gradient(${color} ${pct * 360}deg, ${track} 0deg)`,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: thickness,
      borderRadius: '50%',
      background: 'var(--surface-card)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size > 90 ? 'var(--text-xl)' : 'var(--text-md)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--green-900)'
    }
  }, label ?? Math.round(pct * 100) + '%'), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, caption)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/data/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  label,
  value,
  unit,
  delta,
  deltaTone = 'success',
  icon,
  style,
  ...rest
}) {
  const dc = deltaTone === 'success' ? 'var(--success)' : deltaTone === 'danger' ? 'var(--danger)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--green-900)',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: dc
    }
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-7)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-8)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xl)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    onClick: onClose
  })), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-7)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: ['var(--success-bg)', 'var(--success)', 'circle-check'],
  info: ['var(--info-bg)', 'var(--info)', 'info'],
  warning: ['var(--warning-bg)', 'var(--warning)', 'triangle-alert'],
  danger: ['var(--danger-bg)', 'var(--danger)', 'circle-alert']
};
function Toast({
  tone = 'success',
  title,
  message,
  onClose,
  style,
  ...rest
}) {
  const [bg, fg, ic] = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      background: 'var(--surface-card)',
      borderLeft: 'none',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-5)',
      minWidth: 320,
      maxWidth: 420,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--neutral-800)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)',
      marginTop: 2
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--neutral-400)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: "sm"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--duration-fast) var(--ease-standard)',
      background: 'var(--green-900)',
      color: 'var(--neutral-0)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  label,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--green-700)' : 'var(--border-default)'),
      background: checked ? 'var(--green-700)' : 'var(--surface-card)',
      color: 'var(--neutral-0)',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--neutral-700)',
      letterSpacing: '.01em'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1.5,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-height-sm)',
  md: 'var(--control-height-md)',
  lg: 'var(--control-height-lg)'
};
function Input({
  size = 'md',
  icon,
  error,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      opacity: disabled ? .55 : 1
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'flex',
      color: 'var(--neutral-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "sm"
  })), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      height: H[size],
      padding: '0 16px',
      paddingLeft: icon ? 40 : 16,
      ...{
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        background: 'var(--surface-card)',
        border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--green-700)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)'
      },
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked,
  label,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (checked ? 'var(--green-700)' : 'var(--border-default)'),
      background: 'var(--surface-card)',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-700)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-height-sm)',
  md: 'var(--control-height-md)',
  lg: 'var(--control-height-lg)'
};
function Select({
  options = [],
  size = 'md',
  error,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      opacity: disabled ? .55 : 1
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      height: H[size],
      padding: '0 40px 0 16px',
      appearance: 'none',
      cursor: 'pointer',
      ...{
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        background: 'var(--surface-card)',
        border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--green-700)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)'
      },
      ...style
    }
  }), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      display: 'flex',
      color: 'var(--neutral-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "sm"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  label,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 42,
      height: 24,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      display: 'flex',
      background: checked ? 'var(--green-700)' : 'var(--neutral-300)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--neutral-0)',
      boxShadow: 'var(--shadow-xs)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-out-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  error,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      padding: '12px 16px',
      lineHeight: 'var(--leading-normal)',
      resize: 'vertical',
      opacity: disabled ? .55 : 1,
      ...{
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        background: 'var(--surface-card)',
        border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--green-700)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)'
      },
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SideNav({
  items = [],
  value,
  onChange,
  logoSrc,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      width: 248,
      flex: '0 0 248px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--green-900)',
      color: 'rgba(255,255,255,.75)',
      padding: 'var(--space-7) var(--space-5)',
      gap: 'var(--space-8)',
      ...style
    }
  }), logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Mariana Veiga",
    style: {
      width: 132,
      alignSelf: 'flex-start',
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      flex: 1
    }
  }, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        background: on ? 'rgba(146,205,177,.18)' : 'transparent',
        color: on ? 'var(--green-300)' : 'rgba(255,255,255,.72)',
        transition: 'background var(--duration-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: "sm"
    }), it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 'var(--text-2xs)',
        fontWeight: 700,
        background: 'var(--green-300)',
        color: 'var(--green-900)',
        borderRadius: 'var(--radius-pill)',
        padding: '2px 7px'
      }
    }, it.badge));
  })), footer);
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  logoSrc,
  links = [],
  active,
  onNavigate,
  ctaLabel = 'Agendar consulta',
  onCta,
  transparent,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-9)',
      padding: 'var(--space-5) var(--gutter-page-lg)',
      background: transparent ? 'transparent' : 'var(--surface-card)',
      borderBottom: transparent ? '1px solid transparent' : '1px solid var(--border-subtle)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Mariana Veiga \u2014 Nutri\xE7\xE3o Cl\xEDnica e Esportiva",
    style: {
      height: 52,
      cursor: 'pointer'
    },
    onClick: () => onNavigate && onNavigate('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginLeft: 'auto'
    }
  }, links.map(l => {
    const on = l.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: l.value,
      onClick: () => onNavigate && onNavigate(l.value),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        letterSpacing: '.02em',
        color: on ? 'var(--green-800)' : 'var(--neutral-600)',
        paddingBottom: 2,
        borderBottom: '1px solid ' + (on ? 'var(--green-700)' : 'transparent')
      }
    }, l.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, ctaLabel));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'flex',
      gap: pill ? 'var(--space-2)' : 'var(--space-7)',
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      padding: pill ? 4 : 0,
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? pill ? 'var(--green-800)' : 'var(--green-800)' : 'var(--text-muted)',
        background: pill ? on ? 'var(--surface-card)' : 'transparent' : 'transparent',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        padding: pill ? '8px 18px' : '0 0 12px',
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        borderBottom: pill ? 'none' : '2px solid ' + (on ? 'var(--green-700)' : 'transparent'),
        marginBottom: pill ? 0 : -1,
        transition: 'all var(--duration-fast) var(--ease-standard)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
// Components resolve at render time so script load order never matters.
const DS = n => {
  const C = props => React.createElement((window.MarianaVeigaNutriODesignSystem_b0453d || {})[n], props);
  C.displayName = n;
  return C;
};
const SideNav = DS('SideNav'),
  SiteHeader = DS('SiteHeader'),
  Tabs = DS('Tabs'),
  Button = DS('Button'),
  IconButton = DS('IconButton'),
  Card = DS('Card'),
  Badge = DS('Badge'),
  Tag = DS('Tag'),
  Icon = DS('Icon'),
  Field = DS('Field'),
  Input = DS('Input'),
  Textarea = DS('Textarea'),
  Select = DS('Select'),
  Checkbox = DS('Checkbox'),
  Switch = DS('Switch'),
  Dialog = DS('Dialog'),
  Toast = DS('Toast'),
  Tooltip = DS('Tooltip'),
  StatTile = DS('StatTile'),
  MacroBar = DS('MacroBar'),
  ProgressRing = DS('ProgressRing');
const LOGO_INV = '../../assets/logo-full-inverse.png';
const APPLE = '../../assets/logo-apple.png';
const NAV = [{
  value: 'inicio',
  label: 'Início',
  icon: 'house'
}, {
  value: 'plano',
  label: 'Meu plano',
  icon: 'clipboard-list'
}, {
  value: 'diario',
  label: 'Diário alimentar',
  icon: 'notebook-pen'
}, {
  value: 'progresso',
  label: 'Progresso',
  icon: 'trending-down'
}, {
  value: 'exames',
  label: 'Exames',
  icon: 'flask-conical'
}, {
  value: 'mensagens',
  label: 'Mensagens',
  icon: 'message-circle',
  badge: 2
}, {
  value: 'ajustes',
  label: 'Ajustes',
  icon: 'settings'
}];
function TopBar({
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-7) var(--space-9)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0,
      fontWeight: 500
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, subtitle)), actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifica\xE7\xF5es",
    variant: "outline"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--green-800)',
      fontSize: 'var(--text-sm)'
    }
  }, "CR"));
}
function Body({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      ...style
    }
  }, children);
}
function CardTitle({
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      fontWeight: 500
    }
  }, children), right);
}
function Dashboard({
  go,
  onLog
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Bom dia, Camila",
    subtitle: "Quinta, 27 de agosto \xB7 dia 42 do seu plano",
    actions: /*#__PURE__*/React.createElement(Button, {
      iconLeft: "plus",
      size: "sm",
      onClick: onLog
    }, "Registrar refei\xE7\xE3o")
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "scale",
    label: "Peso",
    value: "68,2",
    unit: "kg",
    delta: "\u22121,4 kg em 30 dias"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "flame",
    label: "Hoje",
    value: "1.240",
    unit: "/ 1.980 kcal",
    delta: "3 de 5 refei\xE7\xF5es"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "droplet",
    label: "\xC1gua",
    value: "1,6",
    unit: "/ 2,4 L",
    delta: "\u22120,8 L da meta",
    deltaTone: "danger"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "activity",
    label: "Treinos na semana",
    value: "4",
    unit: "/ 5",
    delta: "no ritmo"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, {
    right: /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      items: ['Dia', 'Semana'],
      value: "Dia",
      onChange: () => {}
    })
  }, "Macros de hoje"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(MacroBar, {
    label: "Prote\xEDna",
    value: 78,
    target: 130
  }), /*#__PURE__*/React.createElement(MacroBar, {
    label: "Carboidrato",
    value: 148,
    target: 240,
    color: "var(--clay-500)"
  }), /*#__PURE__*/React.createElement(MacroBar, {
    label: "Gordura",
    value: 41,
    target: 60,
    color: "var(--citrus-400)"
  }), /*#__PURE__*/React.createElement(MacroBar, {
    label: "Fibra",
    value: 18,
    target: 30,
    color: "var(--green-400)"
  })), /*#__PURE__*/React.createElement(ProgressRing, {
    value: 63,
    caption: "do dia",
    size: 126
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "soft"
  }, /*#__PURE__*/React.createElement(CardTitle, null, "Pr\xF3xima consulta"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--green-900)'
    }
  }, "12 de setembro, 09h30"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "video"
  }, "Retorno online \xB7 40 min"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-600)',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Leve seus exames mais recentes e o di\xE1rio da \xFAltima semana preenchido."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Confirmar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Reagendar"))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, {
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => go('plano')
    }, "Ver plano completo")
  }, "Refei\xE7\xF5es de hoje"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Café da manhã', '07h00', 'Ovos mexidos, pão integral, mamão', 'done'], ['Lanche da manhã', '10h00', 'Iogurte natural + castanhas', 'done'], ['Almoço', '12h30', 'Arroz, feijão, frango grelhado, salada', 'done'], ['Lanche da tarde', '16h00', 'Fruta + whey', 'todo'], ['Jantar', '19h30', 'Omelete de legumes + batata doce', 'todo']].map(([m, h, d, s], i) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) 0',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: s === 'done' ? 'var(--success-bg)' : 'var(--neutral-100)',
      color: s === 'done' ? 'var(--success)' : 'var(--neutral-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s === 'done' ? 'check' : 'clock',
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--neutral-800)'
    }
  }, m), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-600)'
    }
  }, d), s === 'todo' ? /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: onLog
  }, "Registrar") : /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Registrado")))))));
}
function Plano() {
  const [day, setDay] = React.useState('Qui');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Meu plano",
    subtitle: "Plano alimentar \xB7 revis\xE3o de 30 de julho",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "download"
    }, "Baixar PDF")
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(d => /*#__PURE__*/React.createElement(Tag, {
    key: d,
    selected: d === day,
    onClick: () => setDay(d)
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, [['Café da manhã', '07h00', ['2 ovos mexidos', '1 fatia de pão integral', '1 fatia de mamão', 'Café sem açúcar'], '420 kcal'], ['Lanche da manhã', '10h00', ['1 iogurte natural', '15 g de castanha-de-caju'], '210 kcal'], ['Almoço', '12h30', ['4 col. de arroz integral', '1 concha de feijão', '120 g de frango grelhado', 'Salada à vontade + 1 col. azeite'], '620 kcal'], ['Lanche da tarde', '16h00', ['1 banana', '1 scoop de whey'], '260 kcal'], ['Jantar', '19h30', ['Omelete de 3 ovos com legumes', '150 g de batata doce'], '470 kcal'], ['Ceia (opcional)', '21h30', ['200 ml de leite morno', '1 col. de cacau'], '120 kcal']].map(([m, h, items, kcal]) => /*#__PURE__*/React.createElement(Card, {
    key: m,
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, {
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, kcal)
  }, m, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, h)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: "sm",
    color: "var(--green-400)"
  }), i))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Ver substitui\xE7\xF5es equivalentes"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "repeat"
  }, "Substituir")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "check"
  }, "Marcar como feita"))))), /*#__PURE__*/React.createElement(Card, {
    tone: "sage",
    padding: "lg",
    radius: "xl",
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: APPLE,
    alt: "",
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      marginBottom: 4
    }
  }, "Regra dos 80/20"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: '70ch'
    }
  }, "O plano \xE9 um guia, n\xE3o um contrato. Se um dia sair da rota, retome na pr\xF3xima refei\xE7\xE3o \u2014 sem compensar cortando refei\xE7\xF5es.")))));
}
function Progresso() {
  const pts = [[0, 72.4], [1, 71.8], [2, 71.1], [3, 70.6], [4, 70.2], [5, 69.4], [6, 69.0], [7, 68.6], [8, 68.2]];
  const w = 760,
    h = 200,
    min = 67.5,
    max = 73;
  const x = i => 24 + i * (w - 48) / 8,
    y = v => h - 20 - (v - min) / (max - min) * (h - 50);
  const path = pts.map(([i, v], k) => `${k ? 'L' : 'M'}${x(i)},${y(v)}`).join(' ');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Progresso",
    subtitle: "\xDAltimas 9 semanas",
    actions: /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      items: ['Peso', 'Cintura', 'Bioimpedância'],
      value: "Peso",
      onChange: () => {}
    })
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "scale",
    label: "Peso atual",
    value: "68,2",
    unit: "kg",
    delta: "\u22124,2 kg no total"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "ruler",
    label: "Cintura",
    value: "76",
    unit: "cm",
    delta: "\u22126 cm"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "percent",
    label: "Gordura corporal",
    value: "24,1",
    unit: "%",
    delta: "\u22123,4 p.p."
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, {
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "trending-down"
    }, "Tend\xEAncia de queda")
  }, "Evolu\xE7\xE3o de peso (kg)"), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%',
      height: 200
    }
  }, [68, 70, 72].map(v => /*#__PURE__*/React.createElement("g", {
    key: v
  }, /*#__PURE__*/React.createElement("line", {
    x1: "24",
    x2: w - 24,
    y1: y(v),
    y2: y(v),
    stroke: "var(--neutral-200)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "26",
    y: y(v) - 6,
    fontSize: "10",
    fill: "var(--neutral-400)",
    fontFamily: "var(--font-body)"
  }, v, " kg"))), /*#__PURE__*/React.createElement("path", {
    d: `${path} L${x(8)},${h - 20} L${x(0)},${h - 20} Z`,
    fill: "var(--green-100)"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--green-700)",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), pts.map(([i, v]) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: "4",
    fill: "var(--surface-card)",
    stroke: "var(--green-700)",
    strokeWidth: "2"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, null, "Ades\xE3o semanal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 92,
    caption: "Refei\xE7\xF5es"
  }), /*#__PURE__*/React.createElement(ProgressRing, {
    value: 71,
    caption: "\xC1gua",
    color: "var(--water-500)",
    track: "var(--info-bg)"
  }), /*#__PURE__*/React.createElement(ProgressRing, {
    value: 80,
    caption: "Treinos",
    color: "var(--clay-500)",
    track: "#f6e6df"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, null, "Notas da nutricionista"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, [['30 jul', 'Reduzimos carboidrato do jantar e aumentamos proteína no lanche da tarde.'], ['28 jun', 'Boa adesão. Ajustar hidratação nos dias de treino longo.']].map(([d, t]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      minWidth: 46,
      paddingTop: 3,
      fontWeight: 600
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-700)',
      lineHeight: 'var(--leading-normal)'
    }
  }, t))))))));
}
function Mensagens() {
  const [text, setText] = React.useState('');
  const [msgs, setMsgs] = React.useState([{
    me: false,
    t: 'Camila, vi seu diário da semana. Como ficou a fome no fim da tarde?',
    h: '09h12'
  }, {
    me: true,
    t: 'Bem melhor com o whey! Só nos dias de treino sinto mais fome à noite.',
    h: '09h20'
  }, {
    me: false,
    t: 'Perfeito. Vamos adicionar 30 g de aveia no lanche pré-treino e reavaliar na consulta.',
    h: '09h24'
  }]);
  const send = () => {
    if (!text.trim()) return;
    setMsgs(m => [...m, {
      me: true,
      t: text,
      h: 'agora'
    }]);
    setText('');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Mensagens",
    subtitle: "Canal direto com a nutricionista \xB7 resposta em at\xE9 24h \xFAteis"
  }), /*#__PURE__*/React.createElement(Body, {
    style: {
      height: 'calc(100% - 96px)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      flex: 1
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: m.me ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '62%',
      background: m.me ? 'var(--green-700)' : 'var(--green-50)',
      color: m.me ? 'var(--text-inverse)' : 'var(--neutral-800)',
      padding: 'var(--space-5) var(--space-6)',
      borderRadius: m.me ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)'
    }
  }, m.t, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      opacity: .6,
      marginTop: 6
    }
  }, m.h))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Escreva sua mensagem\u2026",
    value: text,
    onChange: e => setText(e.target.value)
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "paperclip",
    label: "Anexar",
    variant: "outline"
  }), /*#__PURE__*/React.createElement(Button, {
    iconRight: "send",
    onClick: send
  }, "Enviar")))));
}
function Ajustes() {
  const [wa, setWa] = React.useState(true),
    [em, setEm] = React.useState(false),
    [terms, setTerms] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Ajustes"
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, null, "Dados pessoais"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome completo"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Camila Ribeiro"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "camila@email.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Objetivo atual"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Emagrecimento', 'Ganho de massa', 'Performance esportiva', 'Saúde metabólica']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Restri\xE7\xF5es",
    hint: "Separe por v\xEDrgula"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Lactose"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardTitle, null, "Lembretes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: wa,
    onChange: setWa,
    label: "Lembretes de refei\xE7\xE3o por WhatsApp"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: em,
    onChange: setEm,
    label: "Resumo semanal por e-mail"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: terms,
    onChange: setTerms,
    label: "Autorizo o uso dos meus dados para acompanhamento cl\xEDnico"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(CardTitle, null, "Observa\xE7\xF5es para a consulta"), /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "Sintomas, d\xFAvidas, mudan\xE7as na rotina\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Salvar")))))));
}
function Exames() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Exames",
    subtitle: "Envie seus resultados antes de cada retorno",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "upload"
    }, "Enviar exame")
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, [['Hemograma completo', '12 ago 2026', 'Analisado', 'success'], ['Vitamina D · 25-OH', '12 ago 2026', 'Abaixo do ideal', 'warning'], ['Glicemia de jejum', '12 ago 2026', 'Normal', 'success'], ['Ferritina', '04 mai 2026', 'Analisado', 'success'], ['TSH e T4 livre', '—', 'Pendente', 'neutral']].map(([n, d, s, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) var(--space-7)',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flask-conical",
    color: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--neutral-800)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, s), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "eye"
  }, "Ver"))))));
}
function Diario({
  onLog
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Di\xE1rio alimentar",
    subtitle: "Quinta, 27 de agosto",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "plus",
      onClick: onLog
    }, "Novo registro")
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, [['Café da manhã', '07h05', 'Ovos mexidos, pão integral, mamão', '420 kcal'], ['Lanche', '10h10', 'Iogurte + castanhas', '215 kcal'], ['Almoço', '12h40', 'Arroz, feijão, frango, salada', '640 kcal']].map(([m, h, d, k]) => /*#__PURE__*/React.createElement(Card, {
    key: m,
    padding: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage"
  }, m), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, h)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-700)',
      lineHeight: 'var(--leading-normal)',
      marginBottom: 'var(--space-5)'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--green-900)'
    }
  }, k)))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "soft",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    color: "var(--green-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-700)'
    }
  }, "Faltam 2 registros hoje. Anotar logo ap\xF3s a refei\xE7\xE3o deixa o di\xE1rio mais fiel."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: onLog
  }, "Registrar agora")))));
}
function PatientApp() {
  const [page, setPage] = React.useState('inicio');
  const [log, setLog] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const P = {
    inicio: /*#__PURE__*/React.createElement(Dashboard, {
      go: setPage,
      onLog: () => setLog(true)
    }),
    plano: /*#__PURE__*/React.createElement(Plano, null),
    diario: /*#__PURE__*/React.createElement(Diario, {
      onLog: () => setLog(true)
    }),
    progresso: /*#__PURE__*/React.createElement(Progresso, null),
    exames: /*#__PURE__*/React.createElement(Exames, null),
    mensagens: /*#__PURE__*/React.createElement(Mensagens, null),
    ajustes: /*#__PURE__*/React.createElement(Ajustes, null)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    items: NAV,
    value: page,
    onChange: setPage,
    logoSrc: LOGO_INV,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-4)',
        borderTop: '1px solid rgba(146,205,177,.22)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--green-300)',
        color: 'var(--green-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--text-xs)',
        fontWeight: 700
      }
    }, "CR"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'rgba(255,255,255,.7)'
      }
    }, "Camila Ribeiro", /*#__PURE__*/React.createElement("div", {
      style: {
        opacity: .6
      }
    }, "Plano trimestral")))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, P[page]), /*#__PURE__*/React.createElement(Dialog, {
    open: log,
    title: "Registrar refei\xE7\xE3o",
    description: "Descreva o que voc\xEA comeu \u2014 a nutricionista revisa junto no retorno.",
    onClose: () => setLog(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setLog(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setLog(false);
        setToast(true);
      }
    }, "Salvar registro"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Refei\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Café da manhã', 'Lanche da manhã', 'Almoço', 'Lanche da tarde', 'Jantar', 'Ceia']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "O que voc\xEA comeu"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Ex.: 1 banana e 1 scoop de whey"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Como se sentiu depois?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, ['Satisfeita', 'Ainda com fome', 'Muito cheia'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Registro salvo",
    message: "Sua refei\xE7\xE3o entrou no di\xE1rio de hoje.",
    onClose: () => setToast(false)
  })));
}
window.PatientApp = PatientApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
// Components resolve at render time so script load order never matters.
const DS = n => {
  const C = props => React.createElement((window.MarianaVeigaNutriODesignSystem_b0453d || {})[n], props);
  C.displayName = n;
  return C;
};
const SiteHeader = DS('SiteHeader'),
  Button = DS('Button'),
  Card = DS('Card'),
  Badge = DS('Badge'),
  Tag = DS('Tag'),
  Icon = DS('Icon'),
  Field = DS('Field'),
  Input = DS('Input'),
  Select = DS('Select'),
  Textarea = DS('Textarea'),
  Checkbox = DS('Checkbox'),
  Radio = DS('Radio'),
  Dialog = DS('Dialog'),
  Toast = DS('Toast'),
  Tooltip = DS('Tooltip'),
  StatTile = DS('StatTile');
const LOGO = '../../assets/logo-full-transparent.png';
const LOGO_INV = '../../assets/logo-full-inverse.png';
const APPLE = '../../assets/logo-apple.png';
const LINKS = [{
  value: 'home',
  label: 'Início'
}, {
  value: 'sobre',
  label: 'Sobre'
}, {
  value: 'servicos',
  label: 'Serviços'
}, {
  value: 'blog',
  label: 'Conteúdo'
}, {
  value: 'agendar',
  label: 'Contato'
}];
function Photo({
  label,
  height = 280,
  radius = 'var(--radius-xl)',
  tone = 'var(--green-100)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      background: tone,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--green-600)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 600,
      border: '1px dashed var(--green-200)',
      textAlign: 'center',
      padding: 16
    }
  }, label);
}
function Eyebrow({
  children,
  tone = 'var(--green-700)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tone,
      marginBottom: 'var(--space-5)'
    }
  }, children);
}
function Section({
  children,
  tone,
  pad = 'var(--space-13)',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone || 'transparent',
      padding: `${pad} var(--gutter-page-lg)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, children));
}
function H2({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 400,
      maxWidth: '22ch',
      ...style
    }
  }, children);
}
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-12)",
    tone: "var(--green-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Nutri\xE7\xE3o cl\xEDnica e esportiva"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-5xl)',
      fontWeight: 300,
      lineHeight: 'var(--leading-tight)',
      maxWidth: '18ch',
      marginBottom: 'var(--space-6)'
    }
  }, "Comer bem sem abrir m\xE3o da sua rotina."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--neutral-600)',
      maxWidth: '46ch'
    }
  }, "Atendimento individual em Belo Horizonte e online. Plano alimentar constru\xEDdo a partir dos seus exames, do seu treino e do que voc\xEA gosta de comer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('agendar')
  }, "Agendar consulta"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('servicos')
  }, "Ver servi\xE7os")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-10)'
    }
  }, [['CRN-9 12345', 'badge-check'], ['+800 pacientes', 'users-round'], ['Presencial e online', 'video']].map(([t, i]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: "sm",
    color: "var(--green-600)"
  }), t)))), /*#__PURE__*/React.createElement(Photo, {
    label: "Foto de retrato \u2014 consult\xF3rio",
    height: 420
  })));
}
const SERVICES = [{
  icon: 'clipboard-list',
  title: 'Nutrição clínica',
  text: 'Emagrecimento, resistência insulínica, saúde intestinal e alterações em exames.',
  tag: '60 min'
}, {
  icon: 'activity',
  title: 'Nutrição esportiva',
  text: 'Periodização alimentar para corrida, musculação e provas de longa distância.',
  tag: '60 min'
}, {
  icon: 'heart-pulse',
  title: 'Saúde da mulher',
  text: 'SOP, endometriose, gestação e climatério com foco em sintomas e exames.',
  tag: '60 min'
}, {
  icon: 'repeat',
  title: 'Retorno e ajustes',
  text: 'Revisão do plano a cada 30 dias, com leitura de bioimpedância e diário alimentar.',
  tag: '40 min'
}];
function Services({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Servi\xE7os"), /*#__PURE__*/React.createElement(H2, null, "Cada plano nasce de uma consulta, n\xE3o de um modelo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    interactive: true,
    onClick: () => go('servicos'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: "lg"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-600)',
      margin: 0,
      lineHeight: 'var(--leading-normal)'
    }
  }, s.text), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, s.tag)))));
}
function Method() {
  const steps = [['1', 'Anamnese completa', 'Histórico, exames, rotina, treino e preferências alimentares.'], ['2', 'Plano individual', 'Cardápio flexível com substituições reais para dias corridos.'], ['3', 'Acompanhamento', 'Ajustes mensais e canal direto para dúvidas entre consultas.']];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "var(--green-900)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "var(--green-300)"
  }, "Como funciona"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--neutral-0)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 300,
      maxWidth: '16ch'
    }
  }, "Tr\xEAs etapas, um plano que voc\xEA consegue seguir."), /*#__PURE__*/React.createElement("img", {
    src: APPLE,
    alt: "",
    style: {
      height: 78,
      marginTop: 'var(--space-8)',
      filter: 'brightness(1.5)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) 0',
      borderTop: '1px solid rgba(146,205,177,.28)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--green-300)',
      fontWeight: 300,
      minWidth: 36
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--neutral-0)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)'
    }
  }, d)))))));
}
function Results() {
  return /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-11)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "users-round",
    label: "Pacientes atendidos",
    value: "800",
    unit: "+",
    delta: "desde 2016"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "star",
    label: "Avalia\xE7\xE3o m\xE9dia",
    value: "4,9",
    unit: "/5",
    delta: "212 avalia\xE7\xF5es"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "calendar-check",
    label: "Ades\xE3o ao plano",
    value: "92",
    unit: "%",
    delta: "m\xE9dia em 90 dias"
  })));
}
function Testimonials() {
  const t = [['Saí da consulta com um plano que caiu na minha rotina de trabalho — e não passei fome.', 'Camila R., 34'], ['Meus exames normalizaram em quatro meses, comendo comida de verdade.', 'Rodrigo M., 41'], ['Treino de maratona pela primeira vez sem cãibra e sem queda de energia.', 'Júlia P., 29']];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "var(--green-50)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Depoimentos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, t.map(([q, a]) => /*#__PURE__*/React.createElement(Card, {
    key: a,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: "lg",
    color: "var(--green-300)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--green-900)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, a)))));
}
function Posts({
  go
}) {
  const p = [['Proteína no café da manhã: por onde começar', '5 min', 'Rotina'], ['Bioimpedância: o que o exame mostra (e o que não mostra)', '7 min', 'Exames'], ['Carboidrato antes do treino longo', '4 min', 'Esporte']];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Conte\xFAdo"), /*#__PURE__*/React.createElement(H2, {
    style: {
      margin: 0
    }
  }, "Para ler entre uma consulta e outra")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right",
    onClick: () => go('blog')
  }, "Todos os textos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, p.map(([t, m, c]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "none",
    interactive: true,
    elevated: false,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: 'Imagem do artigo',
    height: 168,
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage"
  }, c), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, m, " de leitura")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      margin: 0,
      fontWeight: 500
    }
  }, t))))));
}
function Booking({
  onSubmit
}) {
  const [mod, setMod] = React.useState('online');
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    tone: "var(--green-50)",
    style: {
      paddingBottom: 'var(--space-13)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Agendamento"), /*#__PURE__*/React.createElement(H2, null, "Vamos marcar sua primeira consulta."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--neutral-600)',
      maxWidth: '42ch'
    }
  }, "Responda em um minuto e a secretaria retorna no mesmo dia com os hor\xE1rios dispon\xEDveis."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, [['map-pin', 'Rua das Acácias, 210 — Savassi, Belo Horizonte'], ['message-circle', 'WhatsApp (31) 90000-0000'], ['clock', 'Seg a sex, 8h às 19h']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    color: "var(--green-700)"
  }), t)))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    radius: "xl",
    elevated: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Seu nome"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "(31) 9\u2026"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Servi\xE7o"
  }, /*#__PURE__*/React.createElement(Select, {
    options: SERVICES.map(s => s.title)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Modalidade"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: mod === 'online',
    onChange: () => setMod('online'),
    label: "Online"
  }), /*#__PURE__*/React.createElement(Radio, {
    checked: mod === 'presencial',
    onChange: () => setMod('presencial'),
    label: "Presencial"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Conte um pouco do seu objetivo"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Ex.: melhorar exames e ganhar massa"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ok,
    onChange: setOk,
    label: "Autorizo o contato por WhatsApp"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onSubmit
  }, "Solicitar hor\xE1rio"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-900)',
      padding: 'var(--space-11) var(--gutter-page-lg) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: LOGO_INV,
    alt: "Mariana Veiga",
    style: {
      height: 96
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 'var(--text-sm)',
      maxWidth: '34ch',
      marginTop: 'var(--space-6)'
    }
  }, "Nutricionista cl\xEDnica e esportiva \u2014 CRN-9 12345. Belo Horizonte, MG.")), [['Atendimento', ['Nutrição clínica', 'Nutrição esportiva', 'Saúde da mulher', 'Retorno']], ['Contato', ['WhatsApp', 'Instagram', 'E-mail', 'Área do paciente']]].map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--green-300)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 700,
      marginBottom: 'var(--space-5)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: 'rgba(255,255,255,.72)',
      fontSize: 'var(--text-sm)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-9) auto 0',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(146,205,177,.22)',
      color: 'rgba(255,255,255,.45)',
      fontSize: 'var(--text-xs)'
    }
  }, "\xA9 2026 Mariana Veiga Nutri\xE7\xE3o \xB7 Pol\xEDtica de privacidade"));
}
function SiteApp() {
  const [page, setPage] = React.useState('home');
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const go = p => {
    setPage(p);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: LOGO,
    links: LINKS,
    active: page,
    onNavigate: go,
    onCta: () => go('agendar')
  }), page === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Services, {
    go: go
  }), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Posts, {
    go: go
  })), page === 'sobre' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-12)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Retrato \u2014 Mariana Veiga",
    height: 420
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Sobre"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      fontWeight: 300,
      maxWidth: '20ch'
    }
  }, "Nutri\xE7\xE3o baseada em evid\xEAncia, feita com escuta."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--neutral-600)',
      maxWidth: '52ch'
    }
  }, "Sou nutricionista formada pela UFMG, com especializa\xE7\xE3o em nutri\xE7\xE3o cl\xEDnica funcional e esportiva. Atendo h\xE1 dez anos em Belo Horizonte, e online para pacientes de todo o Brasil."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--neutral-600)',
      maxWidth: '52ch'
    }
  }, "Meu trabalho come\xE7a por entender sua rotina: hor\xE1rios, treino, or\xE7amento e o que voc\xEA gosta de comer. S\xF3 depois vem o plano."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, ['UFMG — Nutrição', 'Pós em Nutrição Esportiva', 'Membro ASBRAN', 'Bioimpedância InBody'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))), /*#__PURE__*/React.createElement(Method, null)), page === 'servicos' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Services, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "var(--green-50)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Investimento"), /*#__PURE__*/React.createElement(H2, null, "Consultas e pacotes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)'
    }
  }, [['Consulta única', 'R$ 350', ['Anamnese de 60 min', 'Plano alimentar individual', 'Relatório de bioimpedância']], ['Trimestral', 'R$ 890', ['Consulta inicial + 2 retornos', 'Ajustes mensais no plano', 'Canal direto no WhatsApp']], ['Esportivo', 'R$ 1.190', ['Periodização por ciclo de treino', 'Estratégia de prova', 'Suplementação orientada']]].map(([t, p, items], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: i === 1 ? 'deep' : 'paper',
    padding: "lg",
    radius: "xl",
    elevated: i === 1,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 300
    }
  }, p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      flex: 1
    }
  }, items.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      opacity: i === 1 ? .85 : .75
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: "sm",
    color: i === 1 ? 'var(--green-300)' : 'var(--green-600)'
  }), x))), /*#__PURE__*/React.createElement(Button, {
    variant: i === 1 ? 'inverse' : 'secondary',
    onClick: () => go('agendar')
  }, "Escolher")))))), page === 'blog' && /*#__PURE__*/React.createElement(Posts, {
    go: go
  }), page === 'agendar' && /*#__PURE__*/React.createElement(Booking, {
    onSubmit: () => setDialog(true)
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    title: "Solicita\xE7\xE3o enviada",
    description: "A secretaria vai responder no WhatsApp com os hor\xE1rios dispon\xEDveis, normalmente em at\xE9 2 horas.",
    onClose: () => setDialog(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setDialog(false);
        setToast(true);
      }
    }, "Entendi")
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Recebemos seu contato",
    message: "Voc\xEA receber\xE1 uma mensagem no WhatsApp (31) 9\u2026",
    onClose: () => setToast(false)
  })));
}
window.SiteApp = SiteApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.MacroBar = __ds_scope.MacroBar;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
