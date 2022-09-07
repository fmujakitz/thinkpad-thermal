export const ButtonBox: {
  new(params?: any): GObject.RegisteredPrototype<{
    _init(params: any): void
    _delegate: any
    container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    _minHPadding: any
    _natHPadding: any
    _onStyleChanged(actor: any): void
    vfunc_get_preferred_width(_forHeight: any): number[]
    vfunc_get_preferred_height(_forWidth: any): number[]
    vfunc_allocate(box: any): void
    _onDestroy(): void
    accessible_name: string
    accessibleName: string
    accessible_role: import("@gi-types/atk1").Role
    accessibleRole: import("@gi-types/atk1").Role
    can_focus: boolean
    canFocus: boolean
    hover: boolean
    label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    pseudo_class: string
    pseudoClass: string
    style: string
    style_class: string
    styleClass: string
    track_hover: boolean
    trackHover: boolean
    connect(id: string, callback: (...args: any[]) => any): number
    connect(signal: "popup-menu", callback: (_source: any) => void): number
    connect(signal: "style-changed", callback: (_source: any) => void): number
    connect_after(id: string, callback: (...args: any[]) => any): number
    connect_after(signal: "popup-menu", callback: (_source: any) => void): number
    connect_after(signal: "style-changed", callback: (_source: any) => void): number
    emit(id: string, ...args: any[]): void
    emit(signal: "popup-menu"): void
    emit(signal: "style-changed"): void
    add_accessible_state(state: import("@gi-types/atk1").StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): import("@gi-types/atk1").Role
    get_can_focus(): boolean
    get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_hover(): boolean
    get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_style(): string
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: Clutter.PaintContext): void
    peek_theme_node(): St.ThemeNode
    popup_menu(): void
    remove_accessible_state(state: import("@gi-types/atk1").StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: import("@gi-types/atk1").Object): void
    set_accessible_name(name?: string): void
    set_accessible_role(role: import("@gi-types/atk1").Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_style(style?: string): void
    set_style_class_name(style_class_list?: string): void
    set_style_pseudo_class(pseudo_class_list?: string): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    find_property(property_name: string): GObject.ParamSpec<unknown>
    get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    set_final_state(property_name: string, value: any): void
    vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
    vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    vfunc_set_final_state(property_name: string, value: any): void
    add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_actor(...args: never[]): any
    child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_get_property(...args: never[]): any
    child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    child_notify(...args: never[]): any
    child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_set_property(...args: never[]): any
    create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    create_child_meta(...args: never[]): any
    destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    destroy_child_meta(...args: never[]): any
    find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    find_child_by_name(...args: never[]): any
    get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    get_child_meta(...args: never[]): any
    remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_actor(...args: never[]): any
    vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_added(...args: never[]): any
    vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_removed(...args: never[]): any
    vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_add(...args: never[]): any
    vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    vfunc_child_notify(...args: never[]): any
    vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_create_child_meta(...args: never[]): any
    vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_destroy_child_meta(...args: never[]): any
    vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    vfunc_get_child_meta(...args: never[]): any
    vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_remove(...args: never[]): any
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    backgroundColor: Clutter.Color
    readonly background_color_set: boolean
    readonly backgroundColorSet: boolean
    child_transform: import("@gi-types/graphene1").Matrix
    childTransform: import("@gi-types/graphene1").Matrix
    readonly child_transform_set: boolean
    readonly childTransformSet: boolean
    clip_rect: import("@gi-types/graphene1").Rect
    clipRect: import("@gi-types/graphene1").Rect
    clip_to_allocation: boolean
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.ContentPrototype
    readonly content_box: Clutter.ActorBox
    readonly contentBox: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    contentGravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    fixed_position_set: boolean
    fixedPositionSet: boolean
    fixed_x: number
    fixedX: number
    fixed_y: number
    fixedY: number
    readonly has_clip: boolean
    readonly hasClip: boolean
    readonly has_pointer: boolean
    readonly hasPointer: boolean
    height: number
    readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    layout_manager: Clutter.LayoutManager
    layoutManager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    marginBottom: number
    margin_left: number
    marginLeft: number
    margin_right: number
    marginRight: number
    margin_top: number
    marginTop: number
    min_height: number
    minHeight: number
    min_height_set: boolean
    minHeightSet: boolean
    min_width: number
    minWidth: number
    min_width_set: boolean
    minWidthSet: boolean
    minification_filter: Clutter.ScalingFilter
    minificationFilter: Clutter.ScalingFilter
    name: string
    natural_height: number
    naturalHeight: number
    natural_height_set: boolean
    naturalHeightSet: boolean
    natural_width: number
    naturalWidth: number
    natural_width_set: boolean
    naturalWidthSet: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: import("@gi-types/graphene1").Point
    pivotPoint: import("@gi-types/graphene1").Point
    pivot_point_z: number
    pivotPointZ: number
    position: import("@gi-types/graphene1").Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    requestMode: Clutter.RequestMode
    rotation_angle_x: number
    rotationAngleX: number
    rotation_angle_y: number
    rotationAngleY: number
    rotation_angle_z: number
    rotationAngleZ: number
    scale_x: number
    scaleX: number
    scale_y: number
    scaleY: number
    scale_z: number
    scaleZ: number
    show_on_set_parent: boolean
    showOnSetParent: boolean
    size: import("@gi-types/graphene1").Size
    text_direction: Clutter.TextDirection
    textDirection: Clutter.TextDirection
    transform: import("@gi-types/graphene1").Matrix
    readonly transform_set: boolean
    readonly transformSet: boolean
    translation_x: number
    translationX: number
    translation_y: number
    translationY: number
    translation_z: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    xAlign: Clutter.ActorAlign
    x_expand: boolean
    xExpand: boolean
    y: number
    y_align: Clutter.ActorAlign
    yAlign: Clutter.ActorAlign
    y_expand: boolean
    yExpand: boolean
    z_position: number
    zPosition: number
    flags: number
    add_action(action: Clutter.Action): void
    add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): import("@gi-types/pango1").Context
    create_pango_layout(text?: string): import("@gi-types/pango1").Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
    get_accessible(): import("@gi-types/atk1").Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): Clutter.ActorBox
    get_background_color(): Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_transform(): import("@gi-types/graphene1").Matrix
    get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_clip(): [number, number, number, number]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.ContentPrototype
    get_content_box(): Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_fixed_position(): [boolean, number, number]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [boolean, Clutter.ActorBox]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): import("@gi-types/pango1").Context
    get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_pivot_point(): [number, number]
    get_pivot_point_z(): number
    get_position(): [number, number]
    get_preferred_height(for_width: number): [number, number]
    get_preferred_size(): [number, number, number, number]
    get_preferred_width(for_height: number): [number, number]
    get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [number, number]
    get_scale_z(): number
    get_size(): [number, number]
    get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    get_text_direction(): Clutter.TextDirection
    get_transform(): import("@gi-types/graphene1").Matrix
    get_transformed_extents(): import("@gi-types/graphene1").Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
    get_transformed_position(): [number, number]
    get_transformed_size(): [number, number]
    get_transition(name: string): Clutter.Transition
    get_translation(): [number, number, number]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color): void
    set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.ContentPrototype): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name?: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [boolean, number, number]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
    vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): import("@gi-types/atk1").Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    g_type_instance: GObject.TypeInstance
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): any
    get_property(property_name: string): any
    get_qdata(quark: number): any
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: any): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): any
    steal_qdata(quark: number): any
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure<any, any>): void
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    disconnect(id: number): void
    set(properties: {
      [key: string]: any
    }): void
    block_signal_handler(id: number): any
    unblock_signal_handler(id: number): any
    stop_emission_by_name(detailedName: string): any
  }, {}, []>
  $gtype: GObject.GType<any>
  prototype: GObject.RegisteredPrototype<{
    _init(params: any): void
    _delegate: any
    container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    _minHPadding: any
    _natHPadding: any
    _onStyleChanged(actor: any): void
    vfunc_get_preferred_width(_forHeight: any): number[]
    vfunc_get_preferred_height(_forWidth: any): number[]
    vfunc_allocate(box: any): void
    _onDestroy(): void
    accessible_name: string
    accessibleName: string
    accessible_role: import("@gi-types/atk1").Role
    accessibleRole: import("@gi-types/atk1").Role
    can_focus: boolean
    canFocus: boolean
    hover: boolean
    label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    pseudo_class: string
    pseudoClass: string
    style: string
    style_class: string
    styleClass: string
    track_hover: boolean
    trackHover: boolean
    connect(id: string, callback: (...args: any[]) => any): number
    connect(signal: "popup-menu", callback: (_source: any) => void): number
    connect(signal: "style-changed", callback: (_source: any) => void): number
    connect_after(id: string, callback: (...args: any[]) => any): number
    connect_after(signal: "popup-menu", callback: (_source: any) => void): number
    connect_after(signal: "style-changed", callback: (_source: any) => void): number
    emit(id: string, ...args: any[]): void
    emit(signal: "popup-menu"): void
    emit(signal: "style-changed"): void
    add_accessible_state(state: import("@gi-types/atk1").StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): import("@gi-types/atk1").Role
    get_can_focus(): boolean
    get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_hover(): boolean
    get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_style(): string
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: Clutter.PaintContext): void
    peek_theme_node(): St.ThemeNode
    popup_menu(): void
    remove_accessible_state(state: import("@gi-types/atk1").StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: import("@gi-types/atk1").Object): void
    set_accessible_name(name?: string): void
    set_accessible_role(role: import("@gi-types/atk1").Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_style(style?: string): void
    set_style_class_name(style_class_list?: string): void
    set_style_pseudo_class(pseudo_class_list?: string): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    find_property(property_name: string): GObject.ParamSpec<unknown>
    get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    set_final_state(property_name: string, value: any): void
    vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
    vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    vfunc_set_final_state(property_name: string, value: any): void
    add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_actor(...args: never[]): any
    child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_get_property(...args: never[]): any
    child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    child_notify(...args: never[]): any
    child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_set_property(...args: never[]): any
    create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    create_child_meta(...args: never[]): any
    destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    destroy_child_meta(...args: never[]): any
    find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    find_child_by_name(...args: never[]): any
    get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    get_child_meta(...args: never[]): any
    remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_actor(...args: never[]): any
    vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_added(...args: never[]): any
    vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_removed(...args: never[]): any
    vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_add(...args: never[]): any
    vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    vfunc_child_notify(...args: never[]): any
    vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_create_child_meta(...args: never[]): any
    vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_destroy_child_meta(...args: never[]): any
    vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    vfunc_get_child_meta(...args: never[]): any
    vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_remove(...args: never[]): any
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    backgroundColor: Clutter.Color
    readonly background_color_set: boolean
    readonly backgroundColorSet: boolean
    child_transform: import("@gi-types/graphene1").Matrix
    childTransform: import("@gi-types/graphene1").Matrix
    readonly child_transform_set: boolean
    readonly childTransformSet: boolean
    clip_rect: import("@gi-types/graphene1").Rect
    clipRect: import("@gi-types/graphene1").Rect
    clip_to_allocation: boolean
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.ContentPrototype
    readonly content_box: Clutter.ActorBox
    readonly contentBox: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    contentGravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    fixed_position_set: boolean
    fixedPositionSet: boolean
    fixed_x: number
    fixedX: number
    fixed_y: number
    fixedY: number
    readonly has_clip: boolean
    readonly hasClip: boolean
    readonly has_pointer: boolean
    readonly hasPointer: boolean
    height: number
    readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    layout_manager: Clutter.LayoutManager
    layoutManager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    marginBottom: number
    margin_left: number
    marginLeft: number
    margin_right: number
    marginRight: number
    margin_top: number
    marginTop: number
    min_height: number
    minHeight: number
    min_height_set: boolean
    minHeightSet: boolean
    min_width: number
    minWidth: number
    min_width_set: boolean
    minWidthSet: boolean
    minification_filter: Clutter.ScalingFilter
    minificationFilter: Clutter.ScalingFilter
    name: string
    natural_height: number
    naturalHeight: number
    natural_height_set: boolean
    naturalHeightSet: boolean
    natural_width: number
    naturalWidth: number
    natural_width_set: boolean
    naturalWidthSet: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: import("@gi-types/graphene1").Point
    pivotPoint: import("@gi-types/graphene1").Point
    pivot_point_z: number
    pivotPointZ: number
    position: import("@gi-types/graphene1").Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    requestMode: Clutter.RequestMode
    rotation_angle_x: number
    rotationAngleX: number
    rotation_angle_y: number
    rotationAngleY: number
    rotation_angle_z: number
    rotationAngleZ: number
    scale_x: number
    scaleX: number
    scale_y: number
    scaleY: number
    scale_z: number
    scaleZ: number
    show_on_set_parent: boolean
    showOnSetParent: boolean
    size: import("@gi-types/graphene1").Size
    text_direction: Clutter.TextDirection
    textDirection: Clutter.TextDirection
    transform: import("@gi-types/graphene1").Matrix
    readonly transform_set: boolean
    readonly transformSet: boolean
    translation_x: number
    translationX: number
    translation_y: number
    translationY: number
    translation_z: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    xAlign: Clutter.ActorAlign
    x_expand: boolean
    xExpand: boolean
    y: number
    y_align: Clutter.ActorAlign
    yAlign: Clutter.ActorAlign
    y_expand: boolean
    yExpand: boolean
    z_position: number
    zPosition: number
    flags: number
    add_action(action: Clutter.Action): void
    add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): import("@gi-types/pango1").Context
    create_pango_layout(text?: string): import("@gi-types/pango1").Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
    get_accessible(): import("@gi-types/atk1").Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): Clutter.ActorBox
    get_background_color(): Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_transform(): import("@gi-types/graphene1").Matrix
    get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_clip(): [number, number, number, number]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.ContentPrototype
    get_content_box(): Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_fixed_position(): [boolean, number, number]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [boolean, Clutter.ActorBox]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): import("@gi-types/pango1").Context
    get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_pivot_point(): [number, number]
    get_pivot_point_z(): number
    get_position(): [number, number]
    get_preferred_height(for_width: number): [number, number]
    get_preferred_size(): [number, number, number, number]
    get_preferred_width(for_height: number): [number, number]
    get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [number, number]
    get_scale_z(): number
    get_size(): [number, number]
    get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    get_text_direction(): Clutter.TextDirection
    get_transform(): import("@gi-types/graphene1").Matrix
    get_transformed_extents(): import("@gi-types/graphene1").Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
    get_transformed_position(): [number, number]
    get_transformed_size(): [number, number]
    get_transition(name: string): Clutter.Transition
    get_translation(): [number, number, number]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color): void
    set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.ContentPrototype): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name?: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [boolean, number, number]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
    vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): import("@gi-types/atk1").Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    g_type_instance: GObject.TypeInstance
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): any
    get_property(property_name: string): any
    get_qdata(quark: number): any
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: any): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): any
    steal_qdata(quark: number): any
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure<any, any>): void
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    disconnect(id: number): void
    set(properties: {
      [key: string]: any
    }): void
    block_signal_handler(id: number): any
    unblock_signal_handler(id: number): any
    stop_emission_by_name(detailedName: string): any
  }, {}, []>
}
export const Button: {
  new(menuAlignment?: any, nameText?: any, dontCreateMenu?: any): GObject.RegisteredPrototype<{
    _init(menuAlignment: any, nameText: any, dontCreateMenu?: any): void
    menu: any
    setSensitive(sensitive: any): void
    reactive: boolean
    can_focus: boolean
    track_hover: boolean
    setMenu(menu: any): void
    vfunc_event(event: any): boolean
    vfunc_hide(): void
    _onMenuKeyPress(actor: any, event: any): boolean
    _onOpenStateChanged(menu: any, open: any): void
    _onDestroy(): void
    _delegate: any
    container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    _minHPadding: any
    _natHPadding: any
    _onStyleChanged(actor: any): void
    vfunc_get_preferred_width(_forHeight: any): number[]
    vfunc_get_preferred_height(_forWidth: any): number[]
    vfunc_allocate(box: any): void
    accessible_name: string
    accessibleName: string
    accessible_role: import("@gi-types/atk1").Role
    accessibleRole: import("@gi-types/atk1").Role
    canFocus: boolean
    hover: boolean
    label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    pseudo_class: string
    pseudoClass: string
    style: string
    style_class: string
    styleClass: string
    trackHover: boolean
    connect(id: string, callback: (...args: any[]) => any): number
    connect(signal: "popup-menu", callback: (_source: any) => void): number
    connect(signal: "style-changed", callback: (_source: any) => void): number
    connect_after(id: string, callback: (...args: any[]) => any): number
    connect_after(signal: "popup-menu", callback: (_source: any) => void): number
    connect_after(signal: "style-changed", callback: (_source: any) => void): number
    emit(id: string, ...args: any[]): void
    emit(signal: "popup-menu"): void
    emit(signal: "style-changed"): void
    add_accessible_state(state: import("@gi-types/atk1").StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): import("@gi-types/atk1").Role
    get_can_focus(): boolean
    get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_hover(): boolean
    get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_style(): string
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: Clutter.PaintContext): void
    peek_theme_node(): St.ThemeNode
    popup_menu(): void
    remove_accessible_state(state: import("@gi-types/atk1").StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: import("@gi-types/atk1").Object): void
    set_accessible_name(name?: string): void
    set_accessible_role(role: import("@gi-types/atk1").Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_style(style?: string): void
    set_style_class_name(style_class_list?: string): void
    set_style_pseudo_class(pseudo_class_list?: string): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    find_property(property_name: string): GObject.ParamSpec<unknown>
    get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    set_final_state(property_name: string, value: any): void
    vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
    vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    vfunc_set_final_state(property_name: string, value: any): void
    add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_actor(...args: never[]): any
    child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_get_property(...args: never[]): any
    child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    child_notify(...args: never[]): any
    child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_set_property(...args: never[]): any
    create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    create_child_meta(...args: never[]): any
    destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    destroy_child_meta(...args: never[]): any
    find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    find_child_by_name(...args: never[]): any
    get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    get_child_meta(...args: never[]): any
    remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_actor(...args: never[]): any
    vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_added(...args: never[]): any
    vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_removed(...args: never[]): any
    vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_add(...args: never[]): any
    vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    vfunc_child_notify(...args: never[]): any
    vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_create_child_meta(...args: never[]): any
    vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_destroy_child_meta(...args: never[]): any
    vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    vfunc_get_child_meta(...args: never[]): any
    vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_remove(...args: never[]): any
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    backgroundColor: Clutter.Color
    readonly background_color_set: boolean
    readonly backgroundColorSet: boolean
    child_transform: import("@gi-types/graphene1").Matrix
    childTransform: import("@gi-types/graphene1").Matrix
    readonly child_transform_set: boolean
    readonly childTransformSet: boolean
    clip_rect: import("@gi-types/graphene1").Rect
    clipRect: import("@gi-types/graphene1").Rect
    clip_to_allocation: boolean
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.ContentPrototype
    readonly content_box: Clutter.ActorBox
    readonly contentBox: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    contentGravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    fixed_position_set: boolean
    fixedPositionSet: boolean
    fixed_x: number
    fixedX: number
    fixed_y: number
    fixedY: number
    readonly has_clip: boolean
    readonly hasClip: boolean
    readonly has_pointer: boolean
    readonly hasPointer: boolean
    height: number
    readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    layout_manager: Clutter.LayoutManager
    layoutManager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    marginBottom: number
    margin_left: number
    marginLeft: number
    margin_right: number
    marginRight: number
    margin_top: number
    marginTop: number
    min_height: number
    minHeight: number
    min_height_set: boolean
    minHeightSet: boolean
    min_width: number
    minWidth: number
    min_width_set: boolean
    minWidthSet: boolean
    minification_filter: Clutter.ScalingFilter
    minificationFilter: Clutter.ScalingFilter
    name: string
    natural_height: number
    naturalHeight: number
    natural_height_set: boolean
    naturalHeightSet: boolean
    natural_width: number
    naturalWidth: number
    natural_width_set: boolean
    naturalWidthSet: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: import("@gi-types/graphene1").Point
    pivotPoint: import("@gi-types/graphene1").Point
    pivot_point_z: number
    pivotPointZ: number
    position: import("@gi-types/graphene1").Point
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    requestMode: Clutter.RequestMode
    rotation_angle_x: number
    rotationAngleX: number
    rotation_angle_y: number
    rotationAngleY: number
    rotation_angle_z: number
    rotationAngleZ: number
    scale_x: number
    scaleX: number
    scale_y: number
    scaleY: number
    scale_z: number
    scaleZ: number
    show_on_set_parent: boolean
    showOnSetParent: boolean
    size: import("@gi-types/graphene1").Size
    text_direction: Clutter.TextDirection
    textDirection: Clutter.TextDirection
    transform: import("@gi-types/graphene1").Matrix
    readonly transform_set: boolean
    readonly transformSet: boolean
    translation_x: number
    translationX: number
    translation_y: number
    translationY: number
    translation_z: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    xAlign: Clutter.ActorAlign
    x_expand: boolean
    xExpand: boolean
    y: number
    y_align: Clutter.ActorAlign
    yAlign: Clutter.ActorAlign
    y_expand: boolean
    yExpand: boolean
    z_position: number
    zPosition: number
    flags: number
    add_action(action: Clutter.Action): void
    add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): import("@gi-types/pango1").Context
    create_pango_layout(text?: string): import("@gi-types/pango1").Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
    get_accessible(): import("@gi-types/atk1").Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): Clutter.ActorBox
    get_background_color(): Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_transform(): import("@gi-types/graphene1").Matrix
    get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_clip(): [number, number, number, number]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.ContentPrototype
    get_content_box(): Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_fixed_position(): [boolean, number, number]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [boolean, Clutter.ActorBox]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): import("@gi-types/pango1").Context
    get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_pivot_point(): [number, number]
    get_pivot_point_z(): number
    get_position(): [number, number]
    get_preferred_height(for_width: number): [number, number]
    get_preferred_size(): [number, number, number, number]
    get_preferred_width(for_height: number): [number, number]
    get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [number, number]
    get_scale_z(): number
    get_size(): [number, number]
    get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    get_text_direction(): Clutter.TextDirection
    get_transform(): import("@gi-types/graphene1").Matrix
    get_transformed_extents(): import("@gi-types/graphene1").Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
    get_transformed_position(): [number, number]
    get_transformed_size(): [number, number]
    get_transition(name: string): Clutter.Transition
    get_translation(): [number, number, number]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color): void
    set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.ContentPrototype): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name?: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [boolean, number, number]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
    vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_get_accessible(): import("@gi-types/atk1").Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    g_type_instance: GObject.TypeInstance
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): any
    get_property(property_name: string): any
    get_qdata(quark: number): any
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: any): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): any
    steal_qdata(quark: number): any
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure<any, any>): void
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    disconnect(id: number): void
    set(properties: {
      [key: string]: any
    }): void
    block_signal_handler(id: number): any
    unblock_signal_handler(id: number): any
    stop_emission_by_name(detailedName: string): any
  }, {
    [key: string]: GObject.ParamSpec<unknown>
  }, unknown[]>
  $gtype: GObject.GType<{
    new(menuAlignment?: any, nameText?: any, dontCreateMenu?: any): GObject.RegisteredPrototype<{
      _init(menuAlignment: any, nameText: any, dontCreateMenu: any): void
      menu: any
      setSensitive(sensitive: any): void
      reactive: boolean
      can_focus: boolean
      track_hover: boolean
      setMenu(menu: any): void
      vfunc_event(event: any): boolean
      vfunc_hide(): void
      _onMenuKeyPress(actor: any, event: any): boolean
      _onOpenStateChanged(menu: any, open: any): void
      _onDestroy(): void
      _delegate: any
      container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
      _minHPadding: any
      _natHPadding: any
      _onStyleChanged(actor: any): void
      vfunc_get_preferred_width(_forHeight: any): number[]
      vfunc_get_preferred_height(_forWidth: any): number[]
      vfunc_allocate(box: any): void
      accessible_name: string
      accessibleName: string
      accessible_role: import("@gi-types/atk1").Role
      accessibleRole: import("@gi-types/atk1").Role
      canFocus: boolean
      hover: boolean
      label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      pseudo_class: string
      pseudoClass: string
      style: string
      style_class: string
      styleClass: string
      trackHover: boolean
      connect(id: string, callback: (...args: any[]) => any): number
      connect(signal: "popup-menu", callback: (_source: any) => void): number
      connect(signal: "style-changed", callback: (_source: any) => void): number
      connect_after(id: string, callback: (...args: any[]) => any): number
      connect_after(signal: "popup-menu", callback: (_source: any) => void): number
      connect_after(signal: "style-changed", callback: (_source: any) => void): number
      emit(id: string, ...args: any[]): void
      emit(signal: "popup-menu"): void
      emit(signal: "style-changed"): void
      add_accessible_state(state: import("@gi-types/atk1").StateType): void
      add_style_class_name(style_class: string): void
      add_style_pseudo_class(pseudo_class: string): void
      ensure_style(): void
      get_accessible_name(): string
      get_accessible_role(): import("@gi-types/atk1").Role
      get_can_focus(): boolean
      get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
      get_hover(): boolean
      get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_style(): string
      get_style_class_name(): string
      get_style_pseudo_class(): string
      get_theme_node(): St.ThemeNode
      get_track_hover(): boolean
      has_style_class_name(style_class: string): boolean
      has_style_pseudo_class(pseudo_class: string): boolean
      navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
      paint_background(paint_context: Clutter.PaintContext): void
      peek_theme_node(): St.ThemeNode
      popup_menu(): void
      remove_accessible_state(state: import("@gi-types/atk1").StateType): void
      remove_style_class_name(style_class: string): void
      remove_style_pseudo_class(pseudo_class: string): void
      set_accessible(accessible: import("@gi-types/atk1").Object): void
      set_accessible_name(name?: string): void
      set_accessible_role(role: import("@gi-types/atk1").Role): void
      set_can_focus(can_focus: boolean): void
      set_hover(hover: boolean): void
      set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      set_style(style?: string): void
      set_style_class_name(style_class_list?: string): void
      set_style_pseudo_class(pseudo_class_list?: string): void
      set_track_hover(track_hover: boolean): void
      style_changed(): void
      sync_hover(): void
      vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
      vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
      vfunc_popup_menu(): void
      vfunc_style_changed(): void
      find_property(property_name: string): GObject.ParamSpec<unknown>
      get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_initial_state(property_name: string, value: any): void
      interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
      set_final_state(property_name: string, value: any): void
      vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
      vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      vfunc_get_initial_state(property_name: string, value: any): void
      vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
      vfunc_set_final_state(property_name: string, value: any): void
      add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      add_actor(...args: never[]): any
      child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
      child_get_property(...args: never[]): any
      child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
      child_notify(...args: never[]): any
      child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
      child_set_property(...args: never[]): any
      create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      create_child_meta(...args: never[]): any
      destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      destroy_child_meta(...args: never[]): any
      find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      find_child_by_name(...args: never[]): any
      get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
      get_child_meta(...args: never[]): any
      remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      remove_actor(...args: never[]): any
      vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_actor_added(...args: never[]): any
      vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_actor_removed(...args: never[]): any
      vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_add(...args: never[]): any
      vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
      vfunc_child_notify(...args: never[]): any
      vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_create_child_meta(...args: never[]): any
      vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_destroy_child_meta(...args: never[]): any
      vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
      vfunc_get_child_meta(...args: never[]): any
      vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_remove(...args: never[]): any
      get_id(): string
      parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
      set_custom_property(script: Clutter.Script, name: string, value: any): void
      set_id(id_: string): void
      vfunc_get_id(): string
      vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
      vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
      vfunc_set_id(id_: string): void
      actions: Clutter.Action
      readonly allocation: Clutter.ActorBox
      background_color: Clutter.Color
      backgroundColor: Clutter.Color
      readonly background_color_set: boolean
      readonly backgroundColorSet: boolean
      child_transform: import("@gi-types/graphene1").Matrix
      childTransform: import("@gi-types/graphene1").Matrix
      readonly child_transform_set: boolean
      readonly childTransformSet: boolean
      clip_rect: import("@gi-types/graphene1").Rect
      clipRect: import("@gi-types/graphene1").Rect
      clip_to_allocation: boolean
      clipToAllocation: boolean
      constraints: Clutter.Constraint
      content: Clutter.ContentPrototype
      readonly content_box: Clutter.ActorBox
      readonly contentBox: Clutter.ActorBox
      content_gravity: Clutter.ContentGravity
      contentGravity: Clutter.ContentGravity
      content_repeat: Clutter.ContentRepeat
      contentRepeat: Clutter.ContentRepeat
      effect: Clutter.Effect
      readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      fixed_position_set: boolean
      fixedPositionSet: boolean
      fixed_x: number
      fixedX: number
      fixed_y: number
      fixedY: number
      readonly has_clip: boolean
      readonly hasClip: boolean
      readonly has_pointer: boolean
      readonly hasPointer: boolean
      height: number
      readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      layout_manager: Clutter.LayoutManager
      layoutManager: Clutter.LayoutManager
      magnification_filter: Clutter.ScalingFilter
      magnificationFilter: Clutter.ScalingFilter
      readonly mapped: boolean
      margin_bottom: number
      marginBottom: number
      margin_left: number
      marginLeft: number
      margin_right: number
      marginRight: number
      margin_top: number
      marginTop: number
      min_height: number
      minHeight: number
      min_height_set: boolean
      minHeightSet: boolean
      min_width: number
      minWidth: number
      min_width_set: boolean
      minWidthSet: boolean
      minification_filter: Clutter.ScalingFilter
      minificationFilter: Clutter.ScalingFilter
      name: string
      natural_height: number
      naturalHeight: number
      natural_height_set: boolean
      naturalHeightSet: boolean
      natural_width: number
      naturalWidth: number
      natural_width_set: boolean
      naturalWidthSet: boolean
      offscreen_redirect: Clutter.OffscreenRedirect
      offscreenRedirect: Clutter.OffscreenRedirect
      opacity: number
      pivot_point: import("@gi-types/graphene1").Point
      pivotPoint: import("@gi-types/graphene1").Point
      pivot_point_z: number
      pivotPointZ: number
      position: import("@gi-types/graphene1").Point
      readonly realized: boolean
      request_mode: Clutter.RequestMode
      requestMode: Clutter.RequestMode
      rotation_angle_x: number
      rotationAngleX: number
      rotation_angle_y: number
      rotationAngleY: number
      rotation_angle_z: number
      rotationAngleZ: number
      scale_x: number
      scaleX: number
      scale_y: number
      scaleY: number
      scale_z: number
      scaleZ: number
      show_on_set_parent: boolean
      showOnSetParent: boolean
      size: import("@gi-types/graphene1").Size
      text_direction: Clutter.TextDirection
      textDirection: Clutter.TextDirection
      transform: import("@gi-types/graphene1").Matrix
      readonly transform_set: boolean
      readonly transformSet: boolean
      translation_x: number
      translationX: number
      translation_y: number
      translationY: number
      translation_z: number
      translationZ: number
      visible: boolean
      width: number
      x: number
      x_align: Clutter.ActorAlign
      xAlign: Clutter.ActorAlign
      x_expand: boolean
      xExpand: boolean
      y: number
      y_align: Clutter.ActorAlign
      yAlign: Clutter.ActorAlign
      y_expand: boolean
      yExpand: boolean
      z_position: number
      zPosition: number
      flags: number
      add_action(action: Clutter.Action): void
      add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
      add_action_with_name(name: string, action: Clutter.Action): void
      add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      add_constraint(constraint: Clutter.Constraint): void
      add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
      add_effect(effect: Clutter.Effect): void
      add_effect_with_name(name: string, effect: Clutter.Effect): void
      add_transition(name: string, transition: Clutter.Transition): void
      allocate(box: Clutter.ActorBox): void
      allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
      allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
      allocate_preferred_size(x: number, y: number): void
      apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
      apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
      bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
      clear_actions(): void
      clear_constraints(): void
      clear_effects(): void
      contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
      continue_paint(paint_context: Clutter.PaintContext): void
      continue_pick(pick_context: Clutter.PickContext): void
      create_pango_context(): import("@gi-types/pango1").Context
      create_pango_layout(text?: string): import("@gi-types/pango1").Layout
      destroy(): void
      destroy_all_children(): void
      event(event: Clutter.Event, capture: boolean): boolean
      get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
      get_accessible(): import("@gi-types/atk1").Object
      get_action(name: string): Clutter.Action
      get_actions(): Clutter.Action[]
      get_allocation_box(): Clutter.ActorBox
      get_background_color(): Clutter.Color
      get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_child_transform(): import("@gi-types/graphene1").Matrix
      get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
      get_clip(): [number, number, number, number]
      get_clip_to_allocation(): boolean
      get_constraint(name: string): Clutter.Constraint
      get_constraints(): Clutter.Constraint[]
      get_content(): Clutter.ContentPrototype
      get_content_box(): Clutter.ActorBox
      get_content_gravity(): Clutter.ContentGravity
      get_content_repeat(): Clutter.ContentRepeat
      get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
      get_default_paint_volume(): Clutter.PaintVolume
      get_easing_delay(): number
      get_easing_duration(): number
      get_easing_mode(): Clutter.AnimationMode
      get_effect(name: string): Clutter.Effect
      get_effects(): Clutter.Effect[]
      get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_fixed_position(): [boolean, number, number]
      get_fixed_position_set(): boolean
      get_flags(): Clutter.ActorFlags
      get_height(): number
      get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_layout_manager(): Clutter.LayoutManager
      get_margin(): Clutter.Margin
      get_margin_bottom(): number
      get_margin_left(): number
      get_margin_right(): number
      get_margin_top(): number
      get_n_children(): number
      get_name(): string
      get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_offscreen_redirect(): Clutter.OffscreenRedirect
      get_opacity(): number
      get_opacity_override(): number
      get_paint_box(): [boolean, Clutter.ActorBox]
      get_paint_opacity(): number
      get_paint_visibility(): boolean
      get_paint_volume(): Clutter.PaintVolume
      get_pango_context(): import("@gi-types/pango1").Context
      get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_pivot_point(): [number, number]
      get_pivot_point_z(): number
      get_position(): [number, number]
      get_preferred_height(for_width: number): [number, number]
      get_preferred_size(): [number, number, number, number]
      get_preferred_width(for_height: number): [number, number]
      get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_reactive(): boolean
      get_request_mode(): Clutter.RequestMode
      get_resource_scale(): number
      get_rotation_angle(axis: Clutter.RotateAxis): number
      get_scale(): [number, number]
      get_scale_z(): number
      get_size(): [number, number]
      get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
      get_text_direction(): Clutter.TextDirection
      get_transform(): import("@gi-types/graphene1").Matrix
      get_transformed_extents(): import("@gi-types/graphene1").Rect
      get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
      get_transformed_position(): [number, number]
      get_transformed_size(): [number, number]
      get_transition(name: string): Clutter.Transition
      get_translation(): [number, number, number]
      get_width(): number
      get_x(): number
      get_x_align(): Clutter.ActorAlign
      get_x_expand(): boolean
      get_y(): number
      get_y_align(): Clutter.ActorAlign
      get_y_expand(): boolean
      get_z_position(): number
      grab_key_focus(): void
      has_accessible(): boolean
      has_actions(): boolean
      has_allocation(): boolean
      has_constraints(): boolean
      has_damage(): boolean
      has_effects(): boolean
      has_key_focus(): boolean
      has_mapped_clones(): boolean
      has_overlaps(): boolean
      hide(): void
      inhibit_culling(): void
      insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
      insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      invalidate_paint_volume(): void
      invalidate_transform(): void
      is_effectively_on_stage_view(view: Clutter.StageView): boolean
      is_in_clone_paint(): boolean
      is_mapped(): boolean
      is_realized(): boolean
      is_rotated(): boolean
      is_scaled(): boolean
      is_visible(): boolean
      map(): void
      move_by(dx: number, dy: number): void
      needs_expand(orientation: Clutter.Orientation): boolean
      paint(paint_context: Clutter.PaintContext): void
      peek_stage_views(): Clutter.StageView[]
      pick(pick_context: Clutter.PickContext): void
      pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
      queue_redraw(): void
      queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
      queue_relayout(): void
      realize(): void
      remove_action(action: Clutter.Action): void
      remove_action_by_name(name: string): void
      remove_all_children(): void
      remove_all_transitions(): void
      remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      remove_clip(): void
      remove_constraint(constraint: Clutter.Constraint): void
      remove_constraint_by_name(name: string): void
      remove_effect(effect: Clutter.Effect): void
      remove_effect_by_name(name: string): void
      remove_transition(name: string): void
      replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      restore_easing_state(): void
      save_easing_state(): void
      set_allocation(box: Clutter.ActorBox): void
      set_background_color(color?: Clutter.Color): void
      set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
      set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
      set_clip(xoff: number, yoff: number, width: number, height: number): void
      set_clip_to_allocation(clip_set: boolean): void
      set_content(content?: Clutter.ContentPrototype): void
      set_content_gravity(gravity: Clutter.ContentGravity): void
      set_content_repeat(repeat: Clutter.ContentRepeat): void
      set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
      set_easing_delay(msecs: number): void
      set_easing_duration(msecs: number): void
      set_easing_mode(mode: Clutter.AnimationMode): void
      set_fixed_position_set(is_set: boolean): void
      set_flags(flags: Clutter.ActorFlags): void
      set_height(height: number): void
      set_layout_manager(manager?: Clutter.LayoutManager): void
      set_margin(margin: Clutter.Margin): void
      set_margin_bottom(margin: number): void
      set_margin_left(margin: number): void
      set_margin_right(margin: number): void
      set_margin_top(margin: number): void
      set_name(name?: string): void
      set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
      set_opacity(opacity: number): void
      set_opacity_override(opacity: number): void
      set_pivot_point(pivot_x: number, pivot_y: number): void
      set_pivot_point_z(pivot_z: number): void
      set_position(x: number, y: number): void
      set_reactive(reactive: boolean): void
      set_request_mode(mode: Clutter.RequestMode): void
      set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
      set_scale(scale_x: number, scale_y: number): void
      set_scale_z(scale_z: number): void
      set_size(width: number, height: number): void
      set_text_direction(text_dir: Clutter.TextDirection): void
      set_transform(transform?: import("@gi-types/graphene1").Matrix): void
      set_translation(translate_x: number, translate_y: number, translate_z: number): void
      set_width(width: number): void
      set_x(x: number): void
      set_x_align(x_align: Clutter.ActorAlign): void
      set_x_expand(expand: boolean): void
      set_y(y: number): void
      set_y_align(y_align: Clutter.ActorAlign): void
      set_y_expand(expand: boolean): void
      set_z_position(z_position: number): void
      should_pick(pick_context: Clutter.PickContext): boolean
      show(): void
      transform_stage_point(x: number, y: number): [boolean, number, number]
      uninhibit_culling(): void
      unmap(): void
      unrealize(): void
      unset_flags(flags: Clutter.ActorFlags): void
      vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
      vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
      vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
      vfunc_calculate_resource_scale(phase: number): number
      vfunc_captured_event(event: Clutter.Event): boolean
      vfunc_destroy(): void
      vfunc_enter_event(event: Clutter.CrossingEvent): boolean
      vfunc_get_accessible(): import("@gi-types/atk1").Object
      vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
      vfunc_has_accessible(): boolean
      vfunc_has_overlaps(): boolean
      vfunc_hide_all(): void
      vfunc_key_focus_in(): void
      vfunc_key_focus_out(): void
      vfunc_key_press_event(event: Clutter.KeyEvent): boolean
      vfunc_key_release_event(event: Clutter.KeyEvent): boolean
      vfunc_leave_event(event: Clutter.CrossingEvent): boolean
      vfunc_map(): void
      vfunc_motion_event(event: Clutter.MotionEvent): boolean
      vfunc_paint(paint_context: Clutter.PaintContext): void
      vfunc_paint_node(root: Clutter.PaintNode): void
      vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_pick(pick_context: Clutter.PickContext): void
      vfunc_queue_relayout(): void
      vfunc_realize(): void
      vfunc_resource_scale_changed(): void
      vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
      vfunc_show(): void
      vfunc_touch_event(event: Clutter.TouchEvent): boolean
      vfunc_unmap(): void
      vfunc_unrealize(): void
      g_type_instance: GObject.TypeInstance
      bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
      bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
      bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
      force_floating(): void
      freeze_notify(): void
      get_data(key: string): any
      get_property(property_name: string): any
      get_qdata(quark: number): any
      getv(names: string[], values: GObject.Value[]): void
      is_floating(): boolean
      notify(property_name: string): void
      notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
      ref(): GObject.Object
      ref_sink(): GObject.Object
      run_dispose(): void
      set_data(key: string, data?: any): void
      set_property(property_name: string, value: any): void
      steal_data(key: string): any
      steal_qdata(quark: number): any
      thaw_notify(): void
      unref(): void
      watch_closure(closure: GObject.Closure<any, any>): void
      vfunc_constructed(): void
      vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
      vfunc_dispose(): void
      vfunc_finalize(): void
      vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
      vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
      vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
      disconnect(id: number): void
      set(properties: {
        [key: string]: any
      }): void
      block_signal_handler(id: number): any
      unblock_signal_handler(id: number): any
      stop_emission_by_name(detailedName: string): any
    }, {
      [key: string]: GObject.ParamSpec<unknown>
    }, never[]>
    $gtype: GObject.GType<{
      new(menuAlignment?: any, nameText?: any, dontCreateMenu?: any): GObject.RegisteredPrototype<{
        _init(menuAlignment: any, nameText: any, dontCreateMenu: any): void
        menu: any
        setSensitive(sensitive: any): void
        reactive: boolean
        can_focus: boolean
        track_hover: boolean
        setMenu(menu: any): void
        vfunc_event(event: any): boolean
        vfunc_hide(): void
        _onMenuKeyPress(actor: any, event: any): boolean
        _onOpenStateChanged(menu: any, open: any): void
        _onDestroy(): void
        _delegate: any
        container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
        _minHPadding: any
        _natHPadding: any
        _onStyleChanged(actor: any): void
        vfunc_get_preferred_width(_forHeight: any): number[]
        vfunc_get_preferred_height(_forWidth: any): number[]
        vfunc_allocate(box: any): void
        accessible_name: string
        accessibleName: string
        accessible_role: import("@gi-types/atk1").Role
        accessibleRole: import("@gi-types/atk1").Role
        canFocus: boolean
        hover: boolean
        label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        pseudo_class: string
        pseudoClass: string
        style: string
        style_class: string
        styleClass: string
        trackHover: boolean
        connect(id: string, callback: (...args: any[]) => any): number
        connect(signal: "popup-menu", callback: (_source: any) => void): number
        connect(signal: "style-changed", callback: (_source: any) => void): number
        connect_after(id: string, callback: (...args: any[]) => any): number
        connect_after(signal: "popup-menu", callback: (_source: any) => void): number
        connect_after(signal: "style-changed", callback: (_source: any) => void): number
        emit(id: string, ...args: any[]): void
        emit(signal: "popup-menu"): void
        emit(signal: "style-changed"): void
        add_accessible_state(state: import("@gi-types/atk1").StateType): void
        add_style_class_name(style_class: string): void
        add_style_pseudo_class(pseudo_class: string): void
        ensure_style(): void
        get_accessible_name(): string
        get_accessible_role(): import("@gi-types/atk1").Role
        get_can_focus(): boolean
        get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
        get_hover(): boolean
        get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_style(): string
        get_style_class_name(): string
        get_style_pseudo_class(): string
        get_theme_node(): St.ThemeNode
        get_track_hover(): boolean
        has_style_class_name(style_class: string): boolean
        has_style_pseudo_class(pseudo_class: string): boolean
        navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
        paint_background(paint_context: Clutter.PaintContext): void
        peek_theme_node(): St.ThemeNode
        popup_menu(): void
        remove_accessible_state(state: import("@gi-types/atk1").StateType): void
        remove_style_class_name(style_class: string): void
        remove_style_pseudo_class(pseudo_class: string): void
        set_accessible(accessible: import("@gi-types/atk1").Object): void
        set_accessible_name(name?: string): void
        set_accessible_role(role: import("@gi-types/atk1").Role): void
        set_can_focus(can_focus: boolean): void
        set_hover(hover: boolean): void
        set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        set_style(style?: string): void
        set_style_class_name(style_class_list?: string): void
        set_style_pseudo_class(pseudo_class_list?: string): void
        set_track_hover(track_hover: boolean): void
        style_changed(): void
        sync_hover(): void
        vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
        vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
        vfunc_popup_menu(): void
        vfunc_style_changed(): void
        find_property(property_name: string): GObject.ParamSpec<unknown>
        get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_initial_state(property_name: string, value: any): void
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
        set_final_state(property_name: string, value: any): void
        vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
        vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        vfunc_get_initial_state(property_name: string, value: any): void
        vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
        vfunc_set_final_state(property_name: string, value: any): void
        add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        add_actor(...args: never[]): any
        child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
        child_get_property(...args: never[]): any
        child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
        child_notify(...args: never[]): any
        child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
        child_set_property(...args: never[]): any
        create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        create_child_meta(...args: never[]): any
        destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        destroy_child_meta(...args: never[]): any
        find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        find_child_by_name(...args: never[]): any
        get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
        get_child_meta(...args: never[]): any
        remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        remove_actor(...args: never[]): any
        vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_actor_added(...args: never[]): any
        vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_actor_removed(...args: never[]): any
        vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_add(...args: never[]): any
        vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
        vfunc_child_notify(...args: never[]): any
        vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_create_child_meta(...args: never[]): any
        vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_destroy_child_meta(...args: never[]): any
        vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
        vfunc_get_child_meta(...args: never[]): any
        vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_remove(...args: never[]): any
        get_id(): string
        parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
        set_custom_property(script: Clutter.Script, name: string, value: any): void
        set_id(id_: string): void
        vfunc_get_id(): string
        vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
        vfunc_set_id(id_: string): void
        actions: Clutter.Action
        readonly allocation: Clutter.ActorBox
        background_color: Clutter.Color
        backgroundColor: Clutter.Color
        readonly background_color_set: boolean
        readonly backgroundColorSet: boolean
        child_transform: import("@gi-types/graphene1").Matrix
        childTransform: import("@gi-types/graphene1").Matrix
        readonly child_transform_set: boolean
        readonly childTransformSet: boolean
        clip_rect: import("@gi-types/graphene1").Rect
        clipRect: import("@gi-types/graphene1").Rect
        clip_to_allocation: boolean
        clipToAllocation: boolean
        constraints: Clutter.Constraint
        content: Clutter.ContentPrototype
        readonly content_box: Clutter.ActorBox
        readonly contentBox: Clutter.ActorBox
        content_gravity: Clutter.ContentGravity
        contentGravity: Clutter.ContentGravity
        content_repeat: Clutter.ContentRepeat
        contentRepeat: Clutter.ContentRepeat
        effect: Clutter.Effect
        readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        fixed_position_set: boolean
        fixedPositionSet: boolean
        fixed_x: number
        fixedX: number
        fixed_y: number
        fixedY: number
        readonly has_clip: boolean
        readonly hasClip: boolean
        readonly has_pointer: boolean
        readonly hasPointer: boolean
        height: number
        readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        layout_manager: Clutter.LayoutManager
        layoutManager: Clutter.LayoutManager
        magnification_filter: Clutter.ScalingFilter
        magnificationFilter: Clutter.ScalingFilter
        readonly mapped: boolean
        margin_bottom: number
        marginBottom: number
        margin_left: number
        marginLeft: number
        margin_right: number
        marginRight: number
        margin_top: number
        marginTop: number
        min_height: number
        minHeight: number
        min_height_set: boolean
        minHeightSet: boolean
        min_width: number
        minWidth: number
        min_width_set: boolean
        minWidthSet: boolean
        minification_filter: Clutter.ScalingFilter
        minificationFilter: Clutter.ScalingFilter
        name: string
        natural_height: number
        naturalHeight: number
        natural_height_set: boolean
        naturalHeightSet: boolean
        natural_width: number
        naturalWidth: number
        natural_width_set: boolean
        naturalWidthSet: boolean
        offscreen_redirect: Clutter.OffscreenRedirect
        offscreenRedirect: Clutter.OffscreenRedirect
        opacity: number
        pivot_point: import("@gi-types/graphene1").Point
        pivotPoint: import("@gi-types/graphene1").Point
        pivot_point_z: number
        pivotPointZ: number
        position: import("@gi-types/graphene1").Point
        readonly realized: boolean
        request_mode: Clutter.RequestMode
        requestMode: Clutter.RequestMode
        rotation_angle_x: number
        rotationAngleX: number
        rotation_angle_y: number
        rotationAngleY: number
        rotation_angle_z: number
        rotationAngleZ: number
        scale_x: number
        scaleX: number
        scale_y: number
        scaleY: number
        scale_z: number
        scaleZ: number
        show_on_set_parent: boolean
        showOnSetParent: boolean
        size: import("@gi-types/graphene1").Size
        text_direction: Clutter.TextDirection
        textDirection: Clutter.TextDirection
        transform: import("@gi-types/graphene1").Matrix
        readonly transform_set: boolean
        readonly transformSet: boolean
        translation_x: number
        translationX: number
        translation_y: number
        translationY: number
        translation_z: number
        translationZ: number
        visible: boolean
        width: number
        x: number
        x_align: Clutter.ActorAlign
        xAlign: Clutter.ActorAlign
        x_expand: boolean
        xExpand: boolean
        y: number
        y_align: Clutter.ActorAlign
        yAlign: Clutter.ActorAlign
        y_expand: boolean
        yExpand: boolean
        z_position: number
        zPosition: number
        flags: number
        add_action(action: Clutter.Action): void
        add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
        add_action_with_name(name: string, action: Clutter.Action): void
        add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        add_constraint(constraint: Clutter.Constraint): void
        add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
        add_effect(effect: Clutter.Effect): void
        add_effect_with_name(name: string, effect: Clutter.Effect): void
        add_transition(name: string, transition: Clutter.Transition): void
        allocate(box: Clutter.ActorBox): void
        allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
        allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
        allocate_preferred_size(x: number, y: number): void
        apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
        apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
        bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
        clear_actions(): void
        clear_constraints(): void
        clear_effects(): void
        contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
        continue_paint(paint_context: Clutter.PaintContext): void
        continue_pick(pick_context: Clutter.PickContext): void
        create_pango_context(): import("@gi-types/pango1").Context
        create_pango_layout(text?: string): import("@gi-types/pango1").Layout
        destroy(): void
        destroy_all_children(): void
        event(event: Clutter.Event, capture: boolean): boolean
        get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
        get_accessible(): import("@gi-types/atk1").Object
        get_action(name: string): Clutter.Action
        get_actions(): Clutter.Action[]
        get_allocation_box(): Clutter.ActorBox
        get_background_color(): Clutter.Color
        get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_child_transform(): import("@gi-types/graphene1").Matrix
        get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
        get_clip(): [number, number, number, number]
        get_clip_to_allocation(): boolean
        get_constraint(name: string): Clutter.Constraint
        get_constraints(): Clutter.Constraint[]
        get_content(): Clutter.ContentPrototype
        get_content_box(): Clutter.ActorBox
        get_content_gravity(): Clutter.ContentGravity
        get_content_repeat(): Clutter.ContentRepeat
        get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
        get_default_paint_volume(): Clutter.PaintVolume
        get_easing_delay(): number
        get_easing_duration(): number
        get_easing_mode(): Clutter.AnimationMode
        get_effect(name: string): Clutter.Effect
        get_effects(): Clutter.Effect[]
        get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_fixed_position(): [boolean, number, number]
        get_fixed_position_set(): boolean
        get_flags(): Clutter.ActorFlags
        get_height(): number
        get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_layout_manager(): Clutter.LayoutManager
        get_margin(): Clutter.Margin
        get_margin_bottom(): number
        get_margin_left(): number
        get_margin_right(): number
        get_margin_top(): number
        get_n_children(): number
        get_name(): string
        get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_offscreen_redirect(): Clutter.OffscreenRedirect
        get_opacity(): number
        get_opacity_override(): number
        get_paint_box(): [boolean, Clutter.ActorBox]
        get_paint_opacity(): number
        get_paint_visibility(): boolean
        get_paint_volume(): Clutter.PaintVolume
        get_pango_context(): import("@gi-types/pango1").Context
        get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_pivot_point(): [number, number]
        get_pivot_point_z(): number
        get_position(): [number, number]
        get_preferred_height(for_width: number): [number, number]
        get_preferred_size(): [number, number, number, number]
        get_preferred_width(for_height: number): [number, number]
        get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_reactive(): boolean
        get_request_mode(): Clutter.RequestMode
        get_resource_scale(): number
        get_rotation_angle(axis: Clutter.RotateAxis): number
        get_scale(): [number, number]
        get_scale_z(): number
        get_size(): [number, number]
        get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
        get_text_direction(): Clutter.TextDirection
        get_transform(): import("@gi-types/graphene1").Matrix
        get_transformed_extents(): import("@gi-types/graphene1").Rect
        get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
        get_transformed_position(): [number, number]
        get_transformed_size(): [number, number]
        get_transition(name: string): Clutter.Transition
        get_translation(): [number, number, number]
        get_width(): number
        get_x(): number
        get_x_align(): Clutter.ActorAlign
        get_x_expand(): boolean
        get_y(): number
        get_y_align(): Clutter.ActorAlign
        get_y_expand(): boolean
        get_z_position(): number
        grab_key_focus(): void
        has_accessible(): boolean
        has_actions(): boolean
        has_allocation(): boolean
        has_constraints(): boolean
        has_damage(): boolean
        has_effects(): boolean
        has_key_focus(): boolean
        has_mapped_clones(): boolean
        has_overlaps(): boolean
        hide(): void
        inhibit_culling(): void
        insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
        insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        invalidate_paint_volume(): void
        invalidate_transform(): void
        is_effectively_on_stage_view(view: Clutter.StageView): boolean
        is_in_clone_paint(): boolean
        is_mapped(): boolean
        is_realized(): boolean
        is_rotated(): boolean
        is_scaled(): boolean
        is_visible(): boolean
        map(): void
        move_by(dx: number, dy: number): void
        needs_expand(orientation: Clutter.Orientation): boolean
        paint(paint_context: Clutter.PaintContext): void
        peek_stage_views(): Clutter.StageView[]
        pick(pick_context: Clutter.PickContext): void
        pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
        queue_redraw(): void
        queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
        queue_relayout(): void
        realize(): void
        remove_action(action: Clutter.Action): void
        remove_action_by_name(name: string): void
        remove_all_children(): void
        remove_all_transitions(): void
        remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        remove_clip(): void
        remove_constraint(constraint: Clutter.Constraint): void
        remove_constraint_by_name(name: string): void
        remove_effect(effect: Clutter.Effect): void
        remove_effect_by_name(name: string): void
        remove_transition(name: string): void
        replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        restore_easing_state(): void
        save_easing_state(): void
        set_allocation(box: Clutter.ActorBox): void
        set_background_color(color?: Clutter.Color): void
        set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
        set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
        set_clip(xoff: number, yoff: number, width: number, height: number): void
        set_clip_to_allocation(clip_set: boolean): void
        set_content(content?: Clutter.ContentPrototype): void
        set_content_gravity(gravity: Clutter.ContentGravity): void
        set_content_repeat(repeat: Clutter.ContentRepeat): void
        set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
        set_easing_delay(msecs: number): void
        set_easing_duration(msecs: number): void
        set_easing_mode(mode: Clutter.AnimationMode): void
        set_fixed_position_set(is_set: boolean): void
        set_flags(flags: Clutter.ActorFlags): void
        set_height(height: number): void
        set_layout_manager(manager?: Clutter.LayoutManager): void
        set_margin(margin: Clutter.Margin): void
        set_margin_bottom(margin: number): void
        set_margin_left(margin: number): void
        set_margin_right(margin: number): void
        set_margin_top(margin: number): void
        set_name(name?: string): void
        set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
        set_opacity(opacity: number): void
        set_opacity_override(opacity: number): void
        set_pivot_point(pivot_x: number, pivot_y: number): void
        set_pivot_point_z(pivot_z: number): void
        set_position(x: number, y: number): void
        set_reactive(reactive: boolean): void
        set_request_mode(mode: Clutter.RequestMode): void
        set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
        set_scale(scale_x: number, scale_y: number): void
        set_scale_z(scale_z: number): void
        set_size(width: number, height: number): void
        set_text_direction(text_dir: Clutter.TextDirection): void
        set_transform(transform?: import("@gi-types/graphene1").Matrix): void
        set_translation(translate_x: number, translate_y: number, translate_z: number): void
        set_width(width: number): void
        set_x(x: number): void
        set_x_align(x_align: Clutter.ActorAlign): void
        set_x_expand(expand: boolean): void
        set_y(y: number): void
        set_y_align(y_align: Clutter.ActorAlign): void
        set_y_expand(expand: boolean): void
        set_z_position(z_position: number): void
        should_pick(pick_context: Clutter.PickContext): boolean
        show(): void
        transform_stage_point(x: number, y: number): [boolean, number, number]
        uninhibit_culling(): void
        unmap(): void
        unrealize(): void
        unset_flags(flags: Clutter.ActorFlags): void
        vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
        vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
        vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
        vfunc_calculate_resource_scale(phase: number): number
        vfunc_captured_event(event: Clutter.Event): boolean
        vfunc_destroy(): void
        vfunc_enter_event(event: Clutter.CrossingEvent): boolean
        vfunc_get_accessible(): import("@gi-types/atk1").Object
        vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
        vfunc_has_accessible(): boolean
        vfunc_has_overlaps(): boolean
        vfunc_hide_all(): void
        vfunc_key_focus_in(): void
        vfunc_key_focus_out(): void
        vfunc_key_press_event(event: Clutter.KeyEvent): boolean
        vfunc_key_release_event(event: Clutter.KeyEvent): boolean
        vfunc_leave_event(event: Clutter.CrossingEvent): boolean
        vfunc_map(): void
        vfunc_motion_event(event: Clutter.MotionEvent): boolean
        vfunc_paint(paint_context: Clutter.PaintContext): void
        vfunc_paint_node(root: Clutter.PaintNode): void
        vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_pick(pick_context: Clutter.PickContext): void
        vfunc_queue_relayout(): void
        vfunc_realize(): void
        vfunc_resource_scale_changed(): void
        vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
        vfunc_show(): void
        vfunc_touch_event(event: Clutter.TouchEvent): boolean
        vfunc_unmap(): void
        vfunc_unrealize(): void
        g_type_instance: GObject.TypeInstance
        bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
        bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
        bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
        force_floating(): void
        freeze_notify(): void
        get_data(key: string): any
        get_property(property_name: string): any
        get_qdata(quark: number): any
        getv(names: string[], values: GObject.Value[]): void
        is_floating(): boolean
        notify(property_name: string): void
        notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
        ref(): GObject.Object
        ref_sink(): GObject.Object
        run_dispose(): void
        set_data(key: string, data?: any): void
        set_property(property_name: string, value: any): void
        steal_data(key: string): any
        steal_qdata(quark: number): any
        thaw_notify(): void
        unref(): void
        watch_closure(closure: GObject.Closure<any, any>): void
        vfunc_constructed(): void
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
        vfunc_dispose(): void
        vfunc_finalize(): void
        vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
        vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
        vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
        disconnect(id: number): void
        set(properties: {
          [key: string]: any
        }): void
        block_signal_handler(id: number): any
        unblock_signal_handler(id: number): any
        stop_emission_by_name(detailedName: string): any
      }, {
        [key: string]: GObject.ParamSpec<unknown>
      }, unknown[]>
      $gtype: GObject.GType<any>
      prototype: GObject.RegisteredPrototype<{
        _init(menuAlignment: any, nameText: any, dontCreateMenu: any): void
        menu: any
        setSensitive(sensitive: any): void
        reactive: boolean
        can_focus: boolean
        track_hover: boolean
        setMenu(menu: any): void
        vfunc_event(event: any): boolean
        vfunc_hide(): void
        _onMenuKeyPress(actor: any, event: any): boolean
        _onOpenStateChanged(menu: any, open: any): void
        _onDestroy(): void
        _delegate: any
        container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
        _minHPadding: any
        _natHPadding: any
        _onStyleChanged(actor: any): void
        vfunc_get_preferred_width(_forHeight: any): number[]
        vfunc_get_preferred_height(_forWidth: any): number[]
        vfunc_allocate(box: any): void
        accessible_name: string
        accessibleName: string
        accessible_role: import("@gi-types/atk1").Role
        accessibleRole: import("@gi-types/atk1").Role
        canFocus: boolean
        hover: boolean
        label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        pseudo_class: string
        pseudoClass: string
        style: string
        style_class: string
        styleClass: string
        trackHover: boolean
        connect(id: string, callback: (...args: any[]) => any): number
        connect(signal: "popup-menu", callback: (_source: any) => void): number
        connect(signal: "style-changed", callback: (_source: any) => void): number
        connect_after(id: string, callback: (...args: any[]) => any): number
        connect_after(signal: "popup-menu", callback: (_source: any) => void): number
        connect_after(signal: "style-changed", callback: (_source: any) => void): number
        emit(id: string, ...args: any[]): void
        emit(signal: "popup-menu"): void
        emit(signal: "style-changed"): void
        add_accessible_state(state: import("@gi-types/atk1").StateType): void
        add_style_class_name(style_class: string): void
        add_style_pseudo_class(pseudo_class: string): void
        ensure_style(): void
        get_accessible_name(): string
        get_accessible_role(): import("@gi-types/atk1").Role
        get_can_focus(): boolean
        get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
        get_hover(): boolean
        get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_style(): string
        get_style_class_name(): string
        get_style_pseudo_class(): string
        get_theme_node(): St.ThemeNode
        get_track_hover(): boolean
        has_style_class_name(style_class: string): boolean
        has_style_pseudo_class(pseudo_class: string): boolean
        navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
        paint_background(paint_context: Clutter.PaintContext): void
        peek_theme_node(): St.ThemeNode
        popup_menu(): void
        remove_accessible_state(state: import("@gi-types/atk1").StateType): void
        remove_style_class_name(style_class: string): void
        remove_style_pseudo_class(pseudo_class: string): void
        set_accessible(accessible: import("@gi-types/atk1").Object): void
        set_accessible_name(name?: string): void
        set_accessible_role(role: import("@gi-types/atk1").Role): void
        set_can_focus(can_focus: boolean): void
        set_hover(hover: boolean): void
        set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        set_style(style?: string): void
        set_style_class_name(style_class_list?: string): void
        set_style_pseudo_class(pseudo_class_list?: string): void
        set_track_hover(track_hover: boolean): void
        style_changed(): void
        sync_hover(): void
        vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
        vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
        vfunc_popup_menu(): void
        vfunc_style_changed(): void
        find_property(property_name: string): GObject.ParamSpec<unknown>
        get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_initial_state(property_name: string, value: any): void
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
        set_final_state(property_name: string, value: any): void
        vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
        vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        vfunc_get_initial_state(property_name: string, value: any): void
        vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
        vfunc_set_final_state(property_name: string, value: any): void
        add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        add_actor(...args: never[]): any
        child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
        child_get_property(...args: never[]): any
        child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
        child_notify(...args: never[]): any
        child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
        child_set_property(...args: never[]): any
        create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        create_child_meta(...args: never[]): any
        destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        destroy_child_meta(...args: never[]): any
        find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        find_child_by_name(...args: never[]): any
        get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
        get_child_meta(...args: never[]): any
        remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        remove_actor(...args: never[]): any
        vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_actor_added(...args: never[]): any
        vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_actor_removed(...args: never[]): any
        vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_add(...args: never[]): any
        vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
        vfunc_child_notify(...args: never[]): any
        vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_create_child_meta(...args: never[]): any
        vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_destroy_child_meta(...args: never[]): any
        vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
        vfunc_get_child_meta(...args: never[]): any
        vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_remove(...args: never[]): any
        get_id(): string
        parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
        set_custom_property(script: Clutter.Script, name: string, value: any): void
        set_id(id_: string): void
        vfunc_get_id(): string
        vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
        vfunc_set_id(id_: string): void
        actions: Clutter.Action
        readonly allocation: Clutter.ActorBox
        background_color: Clutter.Color
        backgroundColor: Clutter.Color
        readonly background_color_set: boolean
        readonly backgroundColorSet: boolean
        child_transform: import("@gi-types/graphene1").Matrix
        childTransform: import("@gi-types/graphene1").Matrix
        readonly child_transform_set: boolean
        readonly childTransformSet: boolean
        clip_rect: import("@gi-types/graphene1").Rect
        clipRect: import("@gi-types/graphene1").Rect
        clip_to_allocation: boolean
        clipToAllocation: boolean
        constraints: Clutter.Constraint
        content: Clutter.ContentPrototype
        readonly content_box: Clutter.ActorBox
        readonly contentBox: Clutter.ActorBox
        content_gravity: Clutter.ContentGravity
        contentGravity: Clutter.ContentGravity
        content_repeat: Clutter.ContentRepeat
        contentRepeat: Clutter.ContentRepeat
        effect: Clutter.Effect
        readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        fixed_position_set: boolean
        fixedPositionSet: boolean
        fixed_x: number
        fixedX: number
        fixed_y: number
        fixedY: number
        readonly has_clip: boolean
        readonly hasClip: boolean
        readonly has_pointer: boolean
        readonly hasPointer: boolean
        height: number
        readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        layout_manager: Clutter.LayoutManager
        layoutManager: Clutter.LayoutManager
        magnification_filter: Clutter.ScalingFilter
        magnificationFilter: Clutter.ScalingFilter
        readonly mapped: boolean
        margin_bottom: number
        marginBottom: number
        margin_left: number
        marginLeft: number
        margin_right: number
        marginRight: number
        margin_top: number
        marginTop: number
        min_height: number
        minHeight: number
        min_height_set: boolean
        minHeightSet: boolean
        min_width: number
        minWidth: number
        min_width_set: boolean
        minWidthSet: boolean
        minification_filter: Clutter.ScalingFilter
        minificationFilter: Clutter.ScalingFilter
        name: string
        natural_height: number
        naturalHeight: number
        natural_height_set: boolean
        naturalHeightSet: boolean
        natural_width: number
        naturalWidth: number
        natural_width_set: boolean
        naturalWidthSet: boolean
        offscreen_redirect: Clutter.OffscreenRedirect
        offscreenRedirect: Clutter.OffscreenRedirect
        opacity: number
        pivot_point: import("@gi-types/graphene1").Point
        pivotPoint: import("@gi-types/graphene1").Point
        pivot_point_z: number
        pivotPointZ: number
        position: import("@gi-types/graphene1").Point
        readonly realized: boolean
        request_mode: Clutter.RequestMode
        requestMode: Clutter.RequestMode
        rotation_angle_x: number
        rotationAngleX: number
        rotation_angle_y: number
        rotationAngleY: number
        rotation_angle_z: number
        rotationAngleZ: number
        scale_x: number
        scaleX: number
        scale_y: number
        scaleY: number
        scale_z: number
        scaleZ: number
        show_on_set_parent: boolean
        showOnSetParent: boolean
        size: import("@gi-types/graphene1").Size
        text_direction: Clutter.TextDirection
        textDirection: Clutter.TextDirection
        transform: import("@gi-types/graphene1").Matrix
        readonly transform_set: boolean
        readonly transformSet: boolean
        translation_x: number
        translationX: number
        translation_y: number
        translationY: number
        translation_z: number
        translationZ: number
        visible: boolean
        width: number
        x: number
        x_align: Clutter.ActorAlign
        xAlign: Clutter.ActorAlign
        x_expand: boolean
        xExpand: boolean
        y: number
        y_align: Clutter.ActorAlign
        yAlign: Clutter.ActorAlign
        y_expand: boolean
        yExpand: boolean
        z_position: number
        zPosition: number
        flags: number
        add_action(action: Clutter.Action): void
        add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
        add_action_with_name(name: string, action: Clutter.Action): void
        add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        add_constraint(constraint: Clutter.Constraint): void
        add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
        add_effect(effect: Clutter.Effect): void
        add_effect_with_name(name: string, effect: Clutter.Effect): void
        add_transition(name: string, transition: Clutter.Transition): void
        allocate(box: Clutter.ActorBox): void
        allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
        allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
        allocate_preferred_size(x: number, y: number): void
        apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
        apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
        bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
        clear_actions(): void
        clear_constraints(): void
        clear_effects(): void
        contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
        continue_paint(paint_context: Clutter.PaintContext): void
        continue_pick(pick_context: Clutter.PickContext): void
        create_pango_context(): import("@gi-types/pango1").Context
        create_pango_layout(text?: string): import("@gi-types/pango1").Layout
        destroy(): void
        destroy_all_children(): void
        event(event: Clutter.Event, capture: boolean): boolean
        get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
        get_accessible(): import("@gi-types/atk1").Object
        get_action(name: string): Clutter.Action
        get_actions(): Clutter.Action[]
        get_allocation_box(): Clutter.ActorBox
        get_background_color(): Clutter.Color
        get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_child_transform(): import("@gi-types/graphene1").Matrix
        get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
        get_clip(): [number, number, number, number]
        get_clip_to_allocation(): boolean
        get_constraint(name: string): Clutter.Constraint
        get_constraints(): Clutter.Constraint[]
        get_content(): Clutter.ContentPrototype
        get_content_box(): Clutter.ActorBox
        get_content_gravity(): Clutter.ContentGravity
        get_content_repeat(): Clutter.ContentRepeat
        get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
        get_default_paint_volume(): Clutter.PaintVolume
        get_easing_delay(): number
        get_easing_duration(): number
        get_easing_mode(): Clutter.AnimationMode
        get_effect(name: string): Clutter.Effect
        get_effects(): Clutter.Effect[]
        get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_fixed_position(): [boolean, number, number]
        get_fixed_position_set(): boolean
        get_flags(): Clutter.ActorFlags
        get_height(): number
        get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_layout_manager(): Clutter.LayoutManager
        get_margin(): Clutter.Margin
        get_margin_bottom(): number
        get_margin_left(): number
        get_margin_right(): number
        get_margin_top(): number
        get_n_children(): number
        get_name(): string
        get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_offscreen_redirect(): Clutter.OffscreenRedirect
        get_opacity(): number
        get_opacity_override(): number
        get_paint_box(): [boolean, Clutter.ActorBox]
        get_paint_opacity(): number
        get_paint_visibility(): boolean
        get_paint_volume(): Clutter.PaintVolume
        get_pango_context(): import("@gi-types/pango1").Context
        get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_pivot_point(): [number, number]
        get_pivot_point_z(): number
        get_position(): [number, number]
        get_preferred_height(for_width: number): [number, number]
        get_preferred_size(): [number, number, number, number]
        get_preferred_width(for_height: number): [number, number]
        get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
        get_reactive(): boolean
        get_request_mode(): Clutter.RequestMode
        get_resource_scale(): number
        get_rotation_angle(axis: Clutter.RotateAxis): number
        get_scale(): [number, number]
        get_scale_z(): number
        get_size(): [number, number]
        get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
        get_text_direction(): Clutter.TextDirection
        get_transform(): import("@gi-types/graphene1").Matrix
        get_transformed_extents(): import("@gi-types/graphene1").Rect
        get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
        get_transformed_position(): [number, number]
        get_transformed_size(): [number, number]
        get_transition(name: string): Clutter.Transition
        get_translation(): [number, number, number]
        get_width(): number
        get_x(): number
        get_x_align(): Clutter.ActorAlign
        get_x_expand(): boolean
        get_y(): number
        get_y_align(): Clutter.ActorAlign
        get_y_expand(): boolean
        get_z_position(): number
        grab_key_focus(): void
        has_accessible(): boolean
        has_actions(): boolean
        has_allocation(): boolean
        has_constraints(): boolean
        has_damage(): boolean
        has_effects(): boolean
        has_key_focus(): boolean
        has_mapped_clones(): boolean
        has_overlaps(): boolean
        hide(): void
        inhibit_culling(): void
        insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
        insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        invalidate_paint_volume(): void
        invalidate_transform(): void
        is_effectively_on_stage_view(view: Clutter.StageView): boolean
        is_in_clone_paint(): boolean
        is_mapped(): boolean
        is_realized(): boolean
        is_rotated(): boolean
        is_scaled(): boolean
        is_visible(): boolean
        map(): void
        move_by(dx: number, dy: number): void
        needs_expand(orientation: Clutter.Orientation): boolean
        paint(paint_context: Clutter.PaintContext): void
        peek_stage_views(): Clutter.StageView[]
        pick(pick_context: Clutter.PickContext): void
        pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
        queue_redraw(): void
        queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
        queue_relayout(): void
        realize(): void
        remove_action(action: Clutter.Action): void
        remove_action_by_name(name: string): void
        remove_all_children(): void
        remove_all_transitions(): void
        remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        remove_clip(): void
        remove_constraint(constraint: Clutter.Constraint): void
        remove_constraint_by_name(name: string): void
        remove_effect(effect: Clutter.Effect): void
        remove_effect_by_name(name: string): void
        remove_transition(name: string): void
        replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        restore_easing_state(): void
        save_easing_state(): void
        set_allocation(box: Clutter.ActorBox): void
        set_background_color(color?: Clutter.Color): void
        set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
        set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
        set_clip(xoff: number, yoff: number, width: number, height: number): void
        set_clip_to_allocation(clip_set: boolean): void
        set_content(content?: Clutter.ContentPrototype): void
        set_content_gravity(gravity: Clutter.ContentGravity): void
        set_content_repeat(repeat: Clutter.ContentRepeat): void
        set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
        set_easing_delay(msecs: number): void
        set_easing_duration(msecs: number): void
        set_easing_mode(mode: Clutter.AnimationMode): void
        set_fixed_position_set(is_set: boolean): void
        set_flags(flags: Clutter.ActorFlags): void
        set_height(height: number): void
        set_layout_manager(manager?: Clutter.LayoutManager): void
        set_margin(margin: Clutter.Margin): void
        set_margin_bottom(margin: number): void
        set_margin_left(margin: number): void
        set_margin_right(margin: number): void
        set_margin_top(margin: number): void
        set_name(name?: string): void
        set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
        set_opacity(opacity: number): void
        set_opacity_override(opacity: number): void
        set_pivot_point(pivot_x: number, pivot_y: number): void
        set_pivot_point_z(pivot_z: number): void
        set_position(x: number, y: number): void
        set_reactive(reactive: boolean): void
        set_request_mode(mode: Clutter.RequestMode): void
        set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
        set_scale(scale_x: number, scale_y: number): void
        set_scale_z(scale_z: number): void
        set_size(width: number, height: number): void
        set_text_direction(text_dir: Clutter.TextDirection): void
        set_transform(transform?: import("@gi-types/graphene1").Matrix): void
        set_translation(translate_x: number, translate_y: number, translate_z: number): void
        set_width(width: number): void
        set_x(x: number): void
        set_x_align(x_align: Clutter.ActorAlign): void
        set_x_expand(expand: boolean): void
        set_y(y: number): void
        set_y_align(y_align: Clutter.ActorAlign): void
        set_y_expand(expand: boolean): void
        set_z_position(z_position: number): void
        should_pick(pick_context: Clutter.PickContext): boolean
        show(): void
        transform_stage_point(x: number, y: number): [boolean, number, number]
        uninhibit_culling(): void
        unmap(): void
        unrealize(): void
        unset_flags(flags: Clutter.ActorFlags): void
        vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
        vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
        vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
        vfunc_calculate_resource_scale(phase: number): number
        vfunc_captured_event(event: Clutter.Event): boolean
        vfunc_destroy(): void
        vfunc_enter_event(event: Clutter.CrossingEvent): boolean
        vfunc_get_accessible(): import("@gi-types/atk1").Object
        vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
        vfunc_has_accessible(): boolean
        vfunc_has_overlaps(): boolean
        vfunc_hide_all(): void
        vfunc_key_focus_in(): void
        vfunc_key_focus_out(): void
        vfunc_key_press_event(event: Clutter.KeyEvent): boolean
        vfunc_key_release_event(event: Clutter.KeyEvent): boolean
        vfunc_leave_event(event: Clutter.CrossingEvent): boolean
        vfunc_map(): void
        vfunc_motion_event(event: Clutter.MotionEvent): boolean
        vfunc_paint(paint_context: Clutter.PaintContext): void
        vfunc_paint_node(root: Clutter.PaintNode): void
        vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
        vfunc_pick(pick_context: Clutter.PickContext): void
        vfunc_queue_relayout(): void
        vfunc_realize(): void
        vfunc_resource_scale_changed(): void
        vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
        vfunc_show(): void
        vfunc_touch_event(event: Clutter.TouchEvent): boolean
        vfunc_unmap(): void
        vfunc_unrealize(): void
        g_type_instance: GObject.TypeInstance
        bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
        bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
        bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
        force_floating(): void
        freeze_notify(): void
        get_data(key: string): any
        get_property(property_name: string): any
        get_qdata(quark: number): any
        getv(names: string[], values: GObject.Value[]): void
        is_floating(): boolean
        notify(property_name: string): void
        notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
        ref(): GObject.Object
        ref_sink(): GObject.Object
        run_dispose(): void
        set_data(key: string, data?: any): void
        set_property(property_name: string, value: any): void
        steal_data(key: string): any
        steal_qdata(quark: number): any
        thaw_notify(): void
        unref(): void
        watch_closure(closure: GObject.Closure<any, any>): void
        vfunc_constructed(): void
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
        vfunc_dispose(): void
        vfunc_finalize(): void
        vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
        vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
        vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
        disconnect(id: number): void
        set(properties: {
          [key: string]: any
        }): void
        block_signal_handler(id: number): any
        unblock_signal_handler(id: number): any
        stop_emission_by_name(detailedName: string): any
      }, {
        [key: string]: GObject.ParamSpec<unknown>
      }, unknown[]>
    }>
    prototype: GObject.RegisteredPrototype<{
      _init(menuAlignment: any, nameText: any, dontCreateMenu: any): void
      menu: any
      setSensitive(sensitive: any): void
      reactive: boolean
      can_focus: boolean
      track_hover: boolean
      setMenu(menu: any): void
      vfunc_event(event: any): boolean
      vfunc_hide(): void
      _onMenuKeyPress(actor: any, event: any): boolean
      _onOpenStateChanged(menu: any, open: any): void
      _onDestroy(): void
      _delegate: any
      container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
      _minHPadding: any
      _natHPadding: any
      _onStyleChanged(actor: any): void
      vfunc_get_preferred_width(_forHeight: any): number[]
      vfunc_get_preferred_height(_forWidth: any): number[]
      vfunc_allocate(box: any): void
      accessible_name: string
      accessibleName: string
      accessible_role: import("@gi-types/atk1").Role
      accessibleRole: import("@gi-types/atk1").Role
      canFocus: boolean
      hover: boolean
      label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      pseudo_class: string
      pseudoClass: string
      style: string
      style_class: string
      styleClass: string
      trackHover: boolean
      connect(id: string, callback: (...args: any[]) => any): number
      connect(signal: "popup-menu", callback: (_source: any) => void): number
      connect(signal: "style-changed", callback: (_source: any) => void): number
      connect_after(id: string, callback: (...args: any[]) => any): number
      connect_after(signal: "popup-menu", callback: (_source: any) => void): number
      connect_after(signal: "style-changed", callback: (_source: any) => void): number
      emit(id: string, ...args: any[]): void
      emit(signal: "popup-menu"): void
      emit(signal: "style-changed"): void
      add_accessible_state(state: import("@gi-types/atk1").StateType): void
      add_style_class_name(style_class: string): void
      add_style_pseudo_class(pseudo_class: string): void
      ensure_style(): void
      get_accessible_name(): string
      get_accessible_role(): import("@gi-types/atk1").Role
      get_can_focus(): boolean
      get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
      get_hover(): boolean
      get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_style(): string
      get_style_class_name(): string
      get_style_pseudo_class(): string
      get_theme_node(): St.ThemeNode
      get_track_hover(): boolean
      has_style_class_name(style_class: string): boolean
      has_style_pseudo_class(pseudo_class: string): boolean
      navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
      paint_background(paint_context: Clutter.PaintContext): void
      peek_theme_node(): St.ThemeNode
      popup_menu(): void
      remove_accessible_state(state: import("@gi-types/atk1").StateType): void
      remove_style_class_name(style_class: string): void
      remove_style_pseudo_class(pseudo_class: string): void
      set_accessible(accessible: import("@gi-types/atk1").Object): void
      set_accessible_name(name?: string): void
      set_accessible_role(role: import("@gi-types/atk1").Role): void
      set_can_focus(can_focus: boolean): void
      set_hover(hover: boolean): void
      set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      set_style(style?: string): void
      set_style_class_name(style_class_list?: string): void
      set_style_pseudo_class(pseudo_class_list?: string): void
      set_track_hover(track_hover: boolean): void
      style_changed(): void
      sync_hover(): void
      vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
      vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
      vfunc_popup_menu(): void
      vfunc_style_changed(): void
      find_property(property_name: string): GObject.ParamSpec<unknown>
      get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_initial_state(property_name: string, value: any): void
      interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
      set_final_state(property_name: string, value: any): void
      vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
      vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      vfunc_get_initial_state(property_name: string, value: any): void
      vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
      vfunc_set_final_state(property_name: string, value: any): void
      add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      add_actor(...args: never[]): any
      child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
      child_get_property(...args: never[]): any
      child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
      child_notify(...args: never[]): any
      child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
      child_set_property(...args: never[]): any
      create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      create_child_meta(...args: never[]): any
      destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      destroy_child_meta(...args: never[]): any
      find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      find_child_by_name(...args: never[]): any
      get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
      get_child_meta(...args: never[]): any
      remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      remove_actor(...args: never[]): any
      vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_actor_added(...args: never[]): any
      vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_actor_removed(...args: never[]): any
      vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_add(...args: never[]): any
      vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
      vfunc_child_notify(...args: never[]): any
      vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_create_child_meta(...args: never[]): any
      vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_destroy_child_meta(...args: never[]): any
      vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
      vfunc_get_child_meta(...args: never[]): any
      vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_remove(...args: never[]): any
      get_id(): string
      parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
      set_custom_property(script: Clutter.Script, name: string, value: any): void
      set_id(id_: string): void
      vfunc_get_id(): string
      vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
      vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
      vfunc_set_id(id_: string): void
      actions: Clutter.Action
      readonly allocation: Clutter.ActorBox
      background_color: Clutter.Color
      backgroundColor: Clutter.Color
      readonly background_color_set: boolean
      readonly backgroundColorSet: boolean
      child_transform: import("@gi-types/graphene1").Matrix
      childTransform: import("@gi-types/graphene1").Matrix
      readonly child_transform_set: boolean
      readonly childTransformSet: boolean
      clip_rect: import("@gi-types/graphene1").Rect
      clipRect: import("@gi-types/graphene1").Rect
      clip_to_allocation: boolean
      clipToAllocation: boolean
      constraints: Clutter.Constraint
      content: Clutter.ContentPrototype
      readonly content_box: Clutter.ActorBox
      readonly contentBox: Clutter.ActorBox
      content_gravity: Clutter.ContentGravity
      contentGravity: Clutter.ContentGravity
      content_repeat: Clutter.ContentRepeat
      contentRepeat: Clutter.ContentRepeat
      effect: Clutter.Effect
      readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      fixed_position_set: boolean
      fixedPositionSet: boolean
      fixed_x: number
      fixedX: number
      fixed_y: number
      fixedY: number
      readonly has_clip: boolean
      readonly hasClip: boolean
      readonly has_pointer: boolean
      readonly hasPointer: boolean
      height: number
      readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      layout_manager: Clutter.LayoutManager
      layoutManager: Clutter.LayoutManager
      magnification_filter: Clutter.ScalingFilter
      magnificationFilter: Clutter.ScalingFilter
      readonly mapped: boolean
      margin_bottom: number
      marginBottom: number
      margin_left: number
      marginLeft: number
      margin_right: number
      marginRight: number
      margin_top: number
      marginTop: number
      min_height: number
      minHeight: number
      min_height_set: boolean
      minHeightSet: boolean
      min_width: number
      minWidth: number
      min_width_set: boolean
      minWidthSet: boolean
      minification_filter: Clutter.ScalingFilter
      minificationFilter: Clutter.ScalingFilter
      name: string
      natural_height: number
      naturalHeight: number
      natural_height_set: boolean
      naturalHeightSet: boolean
      natural_width: number
      naturalWidth: number
      natural_width_set: boolean
      naturalWidthSet: boolean
      offscreen_redirect: Clutter.OffscreenRedirect
      offscreenRedirect: Clutter.OffscreenRedirect
      opacity: number
      pivot_point: import("@gi-types/graphene1").Point
      pivotPoint: import("@gi-types/graphene1").Point
      pivot_point_z: number
      pivotPointZ: number
      position: import("@gi-types/graphene1").Point
      readonly realized: boolean
      request_mode: Clutter.RequestMode
      requestMode: Clutter.RequestMode
      rotation_angle_x: number
      rotationAngleX: number
      rotation_angle_y: number
      rotationAngleY: number
      rotation_angle_z: number
      rotationAngleZ: number
      scale_x: number
      scaleX: number
      scale_y: number
      scaleY: number
      scale_z: number
      scaleZ: number
      show_on_set_parent: boolean
      showOnSetParent: boolean
      size: import("@gi-types/graphene1").Size
      text_direction: Clutter.TextDirection
      textDirection: Clutter.TextDirection
      transform: import("@gi-types/graphene1").Matrix
      readonly transform_set: boolean
      readonly transformSet: boolean
      translation_x: number
      translationX: number
      translation_y: number
      translationY: number
      translation_z: number
      translationZ: number
      visible: boolean
      width: number
      x: number
      x_align: Clutter.ActorAlign
      xAlign: Clutter.ActorAlign
      x_expand: boolean
      xExpand: boolean
      y: number
      y_align: Clutter.ActorAlign
      yAlign: Clutter.ActorAlign
      y_expand: boolean
      yExpand: boolean
      z_position: number
      zPosition: number
      flags: number
      add_action(action: Clutter.Action): void
      add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
      add_action_with_name(name: string, action: Clutter.Action): void
      add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      add_constraint(constraint: Clutter.Constraint): void
      add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
      add_effect(effect: Clutter.Effect): void
      add_effect_with_name(name: string, effect: Clutter.Effect): void
      add_transition(name: string, transition: Clutter.Transition): void
      allocate(box: Clutter.ActorBox): void
      allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
      allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
      allocate_preferred_size(x: number, y: number): void
      apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
      apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
      bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
      clear_actions(): void
      clear_constraints(): void
      clear_effects(): void
      contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
      continue_paint(paint_context: Clutter.PaintContext): void
      continue_pick(pick_context: Clutter.PickContext): void
      create_pango_context(): import("@gi-types/pango1").Context
      create_pango_layout(text?: string): import("@gi-types/pango1").Layout
      destroy(): void
      destroy_all_children(): void
      event(event: Clutter.Event, capture: boolean): boolean
      get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
      get_accessible(): import("@gi-types/atk1").Object
      get_action(name: string): Clutter.Action
      get_actions(): Clutter.Action[]
      get_allocation_box(): Clutter.ActorBox
      get_background_color(): Clutter.Color
      get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_child_transform(): import("@gi-types/graphene1").Matrix
      get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
      get_clip(): [number, number, number, number]
      get_clip_to_allocation(): boolean
      get_constraint(name: string): Clutter.Constraint
      get_constraints(): Clutter.Constraint[]
      get_content(): Clutter.ContentPrototype
      get_content_box(): Clutter.ActorBox
      get_content_gravity(): Clutter.ContentGravity
      get_content_repeat(): Clutter.ContentRepeat
      get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
      get_default_paint_volume(): Clutter.PaintVolume
      get_easing_delay(): number
      get_easing_duration(): number
      get_easing_mode(): Clutter.AnimationMode
      get_effect(name: string): Clutter.Effect
      get_effects(): Clutter.Effect[]
      get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_fixed_position(): [boolean, number, number]
      get_fixed_position_set(): boolean
      get_flags(): Clutter.ActorFlags
      get_height(): number
      get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_layout_manager(): Clutter.LayoutManager
      get_margin(): Clutter.Margin
      get_margin_bottom(): number
      get_margin_left(): number
      get_margin_right(): number
      get_margin_top(): number
      get_n_children(): number
      get_name(): string
      get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_offscreen_redirect(): Clutter.OffscreenRedirect
      get_opacity(): number
      get_opacity_override(): number
      get_paint_box(): [boolean, Clutter.ActorBox]
      get_paint_opacity(): number
      get_paint_visibility(): boolean
      get_paint_volume(): Clutter.PaintVolume
      get_pango_context(): import("@gi-types/pango1").Context
      get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_pivot_point(): [number, number]
      get_pivot_point_z(): number
      get_position(): [number, number]
      get_preferred_height(for_width: number): [number, number]
      get_preferred_size(): [number, number, number, number]
      get_preferred_width(for_height: number): [number, number]
      get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
      get_reactive(): boolean
      get_request_mode(): Clutter.RequestMode
      get_resource_scale(): number
      get_rotation_angle(axis: Clutter.RotateAxis): number
      get_scale(): [number, number]
      get_scale_z(): number
      get_size(): [number, number]
      get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
      get_text_direction(): Clutter.TextDirection
      get_transform(): import("@gi-types/graphene1").Matrix
      get_transformed_extents(): import("@gi-types/graphene1").Rect
      get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
      get_transformed_position(): [number, number]
      get_transformed_size(): [number, number]
      get_transition(name: string): Clutter.Transition
      get_translation(): [number, number, number]
      get_width(): number
      get_x(): number
      get_x_align(): Clutter.ActorAlign
      get_x_expand(): boolean
      get_y(): number
      get_y_align(): Clutter.ActorAlign
      get_y_expand(): boolean
      get_z_position(): number
      grab_key_focus(): void
      has_accessible(): boolean
      has_actions(): boolean
      has_allocation(): boolean
      has_constraints(): boolean
      has_damage(): boolean
      has_effects(): boolean
      has_key_focus(): boolean
      has_mapped_clones(): boolean
      has_overlaps(): boolean
      hide(): void
      inhibit_culling(): void
      insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
      insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      invalidate_paint_volume(): void
      invalidate_transform(): void
      is_effectively_on_stage_view(view: Clutter.StageView): boolean
      is_in_clone_paint(): boolean
      is_mapped(): boolean
      is_realized(): boolean
      is_rotated(): boolean
      is_scaled(): boolean
      is_visible(): boolean
      map(): void
      move_by(dx: number, dy: number): void
      needs_expand(orientation: Clutter.Orientation): boolean
      paint(paint_context: Clutter.PaintContext): void
      peek_stage_views(): Clutter.StageView[]
      pick(pick_context: Clutter.PickContext): void
      pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
      queue_redraw(): void
      queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
      queue_relayout(): void
      realize(): void
      remove_action(action: Clutter.Action): void
      remove_action_by_name(name: string): void
      remove_all_children(): void
      remove_all_transitions(): void
      remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      remove_clip(): void
      remove_constraint(constraint: Clutter.Constraint): void
      remove_constraint_by_name(name: string): void
      remove_effect(effect: Clutter.Effect): void
      remove_effect_by_name(name: string): void
      remove_transition(name: string): void
      replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      restore_easing_state(): void
      save_easing_state(): void
      set_allocation(box: Clutter.ActorBox): void
      set_background_color(color?: Clutter.Color): void
      set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
      set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
      set_clip(xoff: number, yoff: number, width: number, height: number): void
      set_clip_to_allocation(clip_set: boolean): void
      set_content(content?: Clutter.ContentPrototype): void
      set_content_gravity(gravity: Clutter.ContentGravity): void
      set_content_repeat(repeat: Clutter.ContentRepeat): void
      set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
      set_easing_delay(msecs: number): void
      set_easing_duration(msecs: number): void
      set_easing_mode(mode: Clutter.AnimationMode): void
      set_fixed_position_set(is_set: boolean): void
      set_flags(flags: Clutter.ActorFlags): void
      set_height(height: number): void
      set_layout_manager(manager?: Clutter.LayoutManager): void
      set_margin(margin: Clutter.Margin): void
      set_margin_bottom(margin: number): void
      set_margin_left(margin: number): void
      set_margin_right(margin: number): void
      set_margin_top(margin: number): void
      set_name(name?: string): void
      set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
      set_opacity(opacity: number): void
      set_opacity_override(opacity: number): void
      set_pivot_point(pivot_x: number, pivot_y: number): void
      set_pivot_point_z(pivot_z: number): void
      set_position(x: number, y: number): void
      set_reactive(reactive: boolean): void
      set_request_mode(mode: Clutter.RequestMode): void
      set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
      set_scale(scale_x: number, scale_y: number): void
      set_scale_z(scale_z: number): void
      set_size(width: number, height: number): void
      set_text_direction(text_dir: Clutter.TextDirection): void
      set_transform(transform?: import("@gi-types/graphene1").Matrix): void
      set_translation(translate_x: number, translate_y: number, translate_z: number): void
      set_width(width: number): void
      set_x(x: number): void
      set_x_align(x_align: Clutter.ActorAlign): void
      set_x_expand(expand: boolean): void
      set_y(y: number): void
      set_y_align(y_align: Clutter.ActorAlign): void
      set_y_expand(expand: boolean): void
      set_z_position(z_position: number): void
      should_pick(pick_context: Clutter.PickContext): boolean
      show(): void
      transform_stage_point(x: number, y: number): [boolean, number, number]
      uninhibit_culling(): void
      unmap(): void
      unrealize(): void
      unset_flags(flags: Clutter.ActorFlags): void
      vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
      vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
      vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
      vfunc_calculate_resource_scale(phase: number): number
      vfunc_captured_event(event: Clutter.Event): boolean
      vfunc_destroy(): void
      vfunc_enter_event(event: Clutter.CrossingEvent): boolean
      vfunc_get_accessible(): import("@gi-types/atk1").Object
      vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
      vfunc_has_accessible(): boolean
      vfunc_has_overlaps(): boolean
      vfunc_hide_all(): void
      vfunc_key_focus_in(): void
      vfunc_key_focus_out(): void
      vfunc_key_press_event(event: Clutter.KeyEvent): boolean
      vfunc_key_release_event(event: Clutter.KeyEvent): boolean
      vfunc_leave_event(event: Clutter.CrossingEvent): boolean
      vfunc_map(): void
      vfunc_motion_event(event: Clutter.MotionEvent): boolean
      vfunc_paint(paint_context: Clutter.PaintContext): void
      vfunc_paint_node(root: Clutter.PaintNode): void
      vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
      vfunc_pick(pick_context: Clutter.PickContext): void
      vfunc_queue_relayout(): void
      vfunc_realize(): void
      vfunc_resource_scale_changed(): void
      vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
      vfunc_show(): void
      vfunc_touch_event(event: Clutter.TouchEvent): boolean
      vfunc_unmap(): void
      vfunc_unrealize(): void
      g_type_instance: GObject.TypeInstance
      bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
      bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
      bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
      force_floating(): void
      freeze_notify(): void
      get_data(key: string): any
      get_property(property_name: string): any
      get_qdata(quark: number): any
      getv(names: string[], values: GObject.Value[]): void
      is_floating(): boolean
      notify(property_name: string): void
      notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
      ref(): GObject.Object
      ref_sink(): GObject.Object
      run_dispose(): void
      set_data(key: string, data?: any): void
      set_property(property_name: string, value: any): void
      steal_data(key: string): any
      steal_qdata(quark: number): any
      thaw_notify(): void
      unref(): void
      watch_closure(closure: GObject.Closure<any, any>): void
      vfunc_constructed(): void
      vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
      vfunc_dispose(): void
      vfunc_finalize(): void
      vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
      vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
      vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
      disconnect(id: number): void
      set(properties: {
        [key: string]: any
      }): void
      block_signal_handler(id: number): any
      unblock_signal_handler(id: number): any
      stop_emission_by_name(detailedName: string): any
    }, {
      [key: string]: GObject.ParamSpec<unknown>
    }, never[]>
  }>
  prototype: GObject.RegisteredPrototype<{
    _init(menuAlignment: any, nameText: any, dontCreateMenu: any): void
    menu: any
    setSensitive(sensitive: any): void
    reactive: boolean
    can_focus: boolean
    track_hover: boolean
    setMenu(menu: any): void
    vfunc_event(event: any): boolean
    vfunc_hide(): void
    _onMenuKeyPress(actor: any, event: any): boolean
    _onOpenStateChanged(menu: any, open: any): void
    _onDestroy(): void
    _delegate: any
    container: St.Bin<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    _minHPadding: any
    _natHPadding: any
    _onStyleChanged(actor: any): void
    vfunc_get_preferred_width(_forHeight: any): number[]
    vfunc_get_preferred_height(_forWidth: any): number[]
    vfunc_allocate(box: any): void
    accessible_name: string
    accessibleName: string
    accessible_role: import("@gi-types/atk1").Role
    accessibleRole: import("@gi-types/atk1").Role
    canFocus: boolean
    hover: boolean
    label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    pseudo_class: string
    pseudoClass: string
    style: string
    style_class: string
    styleClass: string
    trackHover: boolean
    connect(id: string, callback: (...args: any[]) => any): number
    connect(signal: "popup-menu", callback: (_source: any) => void): number
    connect(signal: "style-changed", callback: (_source: any) => void): number
    connect_after(id: string, callback: (...args: any[]) => any): number
    connect_after(signal: "popup-menu", callback: (_source: any) => void): number
    connect_after(signal: "style-changed", callback: (_source: any) => void): number
    emit(id: string, ...args: any[]): void
    emit(signal: "popup-menu"): void
    emit(signal: "style-changed"): void
    add_accessible_state(state: import("@gi-types/atk1").StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): import("@gi-types/atk1").Role
    get_can_focus(): boolean
    get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_hover(): boolean
    get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_style(): string
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: Clutter.PaintContext): void
    peek_theme_node(): St.ThemeNode
    popup_menu(): void
    remove_accessible_state(state: import("@gi-types/atk1").StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: import("@gi-types/atk1").Object): void
    set_accessible_name(name?: string): void
    set_accessible_role(role: import("@gi-types/atk1").Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_style(style?: string): void
    set_style_class_name(style_class_list?: string): void
    set_style_pseudo_class(pseudo_class_list?: string): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    find_property(property_name: string): GObject.ParamSpec<unknown>
    get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    set_final_state(property_name: string, value: any): void
    vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
    vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    vfunc_set_final_state(property_name: string, value: any): void
    add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_actor(...args: never[]): any
    child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_get_property(...args: never[]): any
    child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    child_notify(...args: never[]): any
    child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_set_property(...args: never[]): any
    create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    create_child_meta(...args: never[]): any
    destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    destroy_child_meta(...args: never[]): any
    find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    find_child_by_name(...args: never[]): any
    get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    get_child_meta(...args: never[]): any
    remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_actor(...args: never[]): any
    vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_added(...args: never[]): any
    vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_removed(...args: never[]): any
    vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_add(...args: never[]): any
    vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    vfunc_child_notify(...args: never[]): any
    vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_create_child_meta(...args: never[]): any
    vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_destroy_child_meta(...args: never[]): any
    vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    vfunc_get_child_meta(...args: never[]): any
    vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_remove(...args: never[]): any
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    backgroundColor: Clutter.Color
    readonly background_color_set: boolean
    readonly backgroundColorSet: boolean
    child_transform: import("@gi-types/graphene1").Matrix
    childTransform: import("@gi-types/graphene1").Matrix
    readonly child_transform_set: boolean
    readonly childTransformSet: boolean
    clip_rect: import("@gi-types/graphene1").Rect
    clipRect: import("@gi-types/graphene1").Rect
    clip_to_allocation: boolean
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.ContentPrototype
    readonly content_box: Clutter.ActorBox
    readonly contentBox: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    contentGravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    fixed_position_set: boolean
    fixedPositionSet: boolean
    fixed_x: number
    fixedX: number
    fixed_y: number
    fixedY: number
    readonly has_clip: boolean
    readonly hasClip: boolean
    readonly has_pointer: boolean
    readonly hasPointer: boolean
    height: number
    readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    layout_manager: Clutter.LayoutManager
    layoutManager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    marginBottom: number
    margin_left: number
    marginLeft: number
    margin_right: number
    marginRight: number
    margin_top: number
    marginTop: number
    min_height: number
    minHeight: number
    min_height_set: boolean
    minHeightSet: boolean
    min_width: number
    minWidth: number
    min_width_set: boolean
    minWidthSet: boolean
    minification_filter: Clutter.ScalingFilter
    minificationFilter: Clutter.ScalingFilter
    name: string
    natural_height: number
    naturalHeight: number
    natural_height_set: boolean
    naturalHeightSet: boolean
    natural_width: number
    naturalWidth: number
    natural_width_set: boolean
    naturalWidthSet: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: import("@gi-types/graphene1").Point
    pivotPoint: import("@gi-types/graphene1").Point
    pivot_point_z: number
    pivotPointZ: number
    position: import("@gi-types/graphene1").Point
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    requestMode: Clutter.RequestMode
    rotation_angle_x: number
    rotationAngleX: number
    rotation_angle_y: number
    rotationAngleY: number
    rotation_angle_z: number
    rotationAngleZ: number
    scale_x: number
    scaleX: number
    scale_y: number
    scaleY: number
    scale_z: number
    scaleZ: number
    show_on_set_parent: boolean
    showOnSetParent: boolean
    size: import("@gi-types/graphene1").Size
    text_direction: Clutter.TextDirection
    textDirection: Clutter.TextDirection
    transform: import("@gi-types/graphene1").Matrix
    readonly transform_set: boolean
    readonly transformSet: boolean
    translation_x: number
    translationX: number
    translation_y: number
    translationY: number
    translation_z: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    xAlign: Clutter.ActorAlign
    x_expand: boolean
    xExpand: boolean
    y: number
    y_align: Clutter.ActorAlign
    yAlign: Clutter.ActorAlign
    y_expand: boolean
    yExpand: boolean
    z_position: number
    zPosition: number
    flags: number
    add_action(action: Clutter.Action): void
    add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): import("@gi-types/pango1").Context
    create_pango_layout(text?: string): import("@gi-types/pango1").Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
    get_accessible(): import("@gi-types/atk1").Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): Clutter.ActorBox
    get_background_color(): Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_transform(): import("@gi-types/graphene1").Matrix
    get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_clip(): [number, number, number, number]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.ContentPrototype
    get_content_box(): Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_fixed_position(): [boolean, number, number]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [boolean, Clutter.ActorBox]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): import("@gi-types/pango1").Context
    get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_pivot_point(): [number, number]
    get_pivot_point_z(): number
    get_position(): [number, number]
    get_preferred_height(for_width: number): [number, number]
    get_preferred_size(): [number, number, number, number]
    get_preferred_width(for_height: number): [number, number]
    get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [number, number]
    get_scale_z(): number
    get_size(): [number, number]
    get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    get_text_direction(): Clutter.TextDirection
    get_transform(): import("@gi-types/graphene1").Matrix
    get_transformed_extents(): import("@gi-types/graphene1").Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
    get_transformed_position(): [number, number]
    get_transformed_size(): [number, number]
    get_transition(name: string): Clutter.Transition
    get_translation(): [number, number, number]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color): void
    set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.ContentPrototype): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name?: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [boolean, number, number]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
    vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_get_accessible(): import("@gi-types/atk1").Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    g_type_instance: GObject.TypeInstance
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): any
    get_property(property_name: string): any
    get_qdata(quark: number): any
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: any): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): any
    steal_qdata(quark: number): any
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure<any, any>): void
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    disconnect(id: number): void
    set(properties: {
      [key: string]: any
    }): void
    block_signal_handler(id: number): any
    unblock_signal_handler(id: number): any
    stop_emission_by_name(detailedName: string): any
  }, {
    [key: string]: GObject.ParamSpec<unknown>
  }, unknown[]>
}
export const SystemIndicator: {
  new(): GObject.RegisteredPrototype<{
    _init(): void
    menu: any
    readonly indicators: any
    _syncIndicatorsVisible(): void
    visible: boolean
    _addIndicator(): St.Icon<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    pack_start: boolean
    packStart: boolean
    vertical: boolean
    hadjustment: St.Adjustment
    vadjustment: St.Adjustment
    get_pack_start(): boolean
    get_vertical(): boolean
    set_pack_start(pack_start: boolean): void
    set_vertical(vertical: boolean): void
    add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    get_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    set_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    vfunc_get_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    vfunc_set_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    clip_to_view: boolean
    clipToView: boolean
    accessible_name: string
    accessibleName: string
    accessible_role: import("@gi-types/atk1").Role
    accessibleRole: import("@gi-types/atk1").Role
    can_focus: boolean
    canFocus: boolean
    hover: boolean
    label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    pseudo_class: string
    pseudoClass: string
    style: string
    style_class: string
    styleClass: string
    track_hover: boolean
    trackHover: boolean
    connect(id: string, callback: (...args: any[]) => any): number
    connect(signal: "popup-menu", callback: (_source: any) => void): number
    connect(signal: "style-changed", callback: (_source: any) => void): number
    connect_after(id: string, callback: (...args: any[]) => any): number
    connect_after(signal: "popup-menu", callback: (_source: any) => void): number
    connect_after(signal: "style-changed", callback: (_source: any) => void): number
    emit(id: string, ...args: any[]): void
    emit(signal: "popup-menu"): void
    emit(signal: "style-changed"): void
    add_accessible_state(state: import("@gi-types/atk1").StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): import("@gi-types/atk1").Role
    get_can_focus(): boolean
    get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_hover(): boolean
    get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_style(): string
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: Clutter.PaintContext): void
    peek_theme_node(): St.ThemeNode
    popup_menu(): void
    remove_accessible_state(state: import("@gi-types/atk1").StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: import("@gi-types/atk1").Object): void
    set_accessible_name(name?: string): void
    set_accessible_role(role: import("@gi-types/atk1").Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_style(style?: string): void
    set_style_class_name(style_class_list?: string): void
    set_style_pseudo_class(pseudo_class_list?: string): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    find_property(property_name: string): GObject.ParamSpec<unknown>
    get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    set_final_state(property_name: string, value: any): void
    vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
    vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    vfunc_set_final_state(property_name: string, value: any): void
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    backgroundColor: Clutter.Color
    readonly background_color_set: boolean
    readonly backgroundColorSet: boolean
    child_transform: import("@gi-types/graphene1").Matrix
    childTransform: import("@gi-types/graphene1").Matrix
    readonly child_transform_set: boolean
    readonly childTransformSet: boolean
    clip_rect: import("@gi-types/graphene1").Rect
    clipRect: import("@gi-types/graphene1").Rect
    clip_to_allocation: boolean
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.ContentPrototype
    readonly content_box: Clutter.ActorBox
    readonly contentBox: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    contentGravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    fixed_position_set: boolean
    fixedPositionSet: boolean
    fixed_x: number
    fixedX: number
    fixed_y: number
    fixedY: number
    readonly has_clip: boolean
    readonly hasClip: boolean
    readonly has_pointer: boolean
    readonly hasPointer: boolean
    height: number
    readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    layout_manager: Clutter.BoxLayout
    layoutManager: Clutter.BoxLayout
    magnification_filter: Clutter.ScalingFilter
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    marginBottom: number
    margin_left: number
    marginLeft: number
    margin_right: number
    marginRight: number
    margin_top: number
    marginTop: number
    min_height: number
    minHeight: number
    min_height_set: boolean
    minHeightSet: boolean
    min_width: number
    minWidth: number
    min_width_set: boolean
    minWidthSet: boolean
    minification_filter: Clutter.ScalingFilter
    minificationFilter: Clutter.ScalingFilter
    name: string
    natural_height: number
    naturalHeight: number
    natural_height_set: boolean
    naturalHeightSet: boolean
    natural_width: number
    naturalWidth: number
    natural_width_set: boolean
    naturalWidthSet: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: import("@gi-types/graphene1").Point
    pivotPoint: import("@gi-types/graphene1").Point
    pivot_point_z: number
    pivotPointZ: number
    position: import("@gi-types/graphene1").Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    requestMode: Clutter.RequestMode
    rotation_angle_x: number
    rotationAngleX: number
    rotation_angle_y: number
    rotationAngleY: number
    rotation_angle_z: number
    rotationAngleZ: number
    scale_x: number
    scaleX: number
    scale_y: number
    scaleY: number
    scale_z: number
    scaleZ: number
    show_on_set_parent: boolean
    showOnSetParent: boolean
    size: import("@gi-types/graphene1").Size
    text_direction: Clutter.TextDirection
    textDirection: Clutter.TextDirection
    transform: import("@gi-types/graphene1").Matrix
    readonly transform_set: boolean
    readonly transformSet: boolean
    translation_x: number
    translationX: number
    translation_y: number
    translationY: number
    translation_z: number
    translationZ: number
    width: number
    x: number
    x_align: Clutter.ActorAlign
    xAlign: Clutter.ActorAlign
    x_expand: boolean
    xExpand: boolean
    y: number
    y_align: Clutter.ActorAlign
    yAlign: Clutter.ActorAlign
    y_expand: boolean
    yExpand: boolean
    z_position: number
    zPosition: number
    flags: number
    add_action(action: Clutter.Action): void
    add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): import("@gi-types/pango1").Context
    create_pango_layout(text?: string): import("@gi-types/pango1").Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
    get_accessible(): import("@gi-types/atk1").Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): Clutter.ActorBox
    get_background_color(): Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_transform(): import("@gi-types/graphene1").Matrix
    get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_clip(): [number, number, number, number]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.ContentPrototype
    get_content_box(): Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_fixed_position(): [boolean, number, number]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_layout_manager(): Clutter.BoxLayout
    get_margin(): Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [boolean, Clutter.ActorBox]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): import("@gi-types/pango1").Context
    get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_pivot_point(): [number, number]
    get_pivot_point_z(): number
    get_position(): [number, number]
    get_preferred_height(for_width: number): [number, number]
    get_preferred_size(): [number, number, number, number]
    get_preferred_width(for_height: number): [number, number]
    get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [number, number]
    get_scale_z(): number
    get_size(): [number, number]
    get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    get_text_direction(): Clutter.TextDirection
    get_transform(): import("@gi-types/graphene1").Matrix
    get_transformed_extents(): import("@gi-types/graphene1").Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
    get_transformed_position(): [number, number]
    get_transformed_size(): [number, number]
    get_transition(name: string): Clutter.Transition
    get_translation(): [number, number, number]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color): void
    set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.ContentPrototype): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.BoxLayout): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name?: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [boolean, number, number]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
    vfunc_allocate(box: Clutter.ActorBox): void
    vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): import("@gi-types/atk1").Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [number, number]
    vfunc_get_preferred_width(for_height: number): [number, number]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    g_type_instance: GObject.TypeInstance
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): any
    get_property(property_name: string): any
    get_qdata(quark: number): any
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: any): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): any
    steal_qdata(quark: number): any
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure<any, any>): void
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    disconnect(id: number): void
    set(properties: {
      [key: string]: any
    }): void
    block_signal_handler(id: number): any
    unblock_signal_handler(id: number): any
    stop_emission_by_name(detailedName: string): any
  }, {}, []>
  $gtype: GObject.GType<any>
  prototype: GObject.RegisteredPrototype<{
    _init(): void
    menu: any
    readonly indicators: any
    _syncIndicatorsVisible(): void
    visible: boolean
    _addIndicator(): St.Icon<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    pack_start: boolean
    packStart: boolean
    vertical: boolean
    hadjustment: St.Adjustment
    vadjustment: St.Adjustment
    get_pack_start(): boolean
    get_vertical(): boolean
    set_pack_start(pack_start: boolean): void
    set_vertical(vertical: boolean): void
    add_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    child_get_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    child_set_property(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    find_child_by_name(child_name: string): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    remove_actor(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_added(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_actor_removed(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_add(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_child_notify(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, pspec: GObject.ParamSpec<unknown>): void
    vfunc_create_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_destroy_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_get_child_meta(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.ChildMeta
    vfunc_remove(actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    get_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    set_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    vfunc_get_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    vfunc_set_adjustments(hadjustment: St.Adjustment, vadjustment: St.Adjustment): void
    clip_to_view: boolean
    clipToView: boolean
    accessible_name: string
    accessibleName: string
    accessible_role: import("@gi-types/atk1").Role
    accessibleRole: import("@gi-types/atk1").Role
    can_focus: boolean
    canFocus: boolean
    hover: boolean
    label_actor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    labelActor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    pseudo_class: string
    pseudoClass: string
    style: string
    style_class: string
    styleClass: string
    track_hover: boolean
    trackHover: boolean
    connect(id: string, callback: (...args: any[]) => any): number
    connect(signal: "popup-menu", callback: (_source: any) => void): number
    connect(signal: "style-changed", callback: (_source: any) => void): number
    connect_after(id: string, callback: (...args: any[]) => any): number
    connect_after(signal: "popup-menu", callback: (_source: any) => void): number
    connect_after(signal: "style-changed", callback: (_source: any) => void): number
    emit(id: string, ...args: any[]): void
    emit(signal: "popup-menu"): void
    emit(signal: "style-changed"): void
    add_accessible_state(state: import("@gi-types/atk1").StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): import("@gi-types/atk1").Role
    get_can_focus(): boolean
    get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_hover(): boolean
    get_label_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_style(): string
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: Clutter.PaintContext): void
    peek_theme_node(): St.ThemeNode
    popup_menu(): void
    remove_accessible_state(state: import("@gi-types/atk1").StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: import("@gi-types/atk1").Object): void
    set_accessible_name(name?: string): void
    set_accessible_role(role: import("@gi-types/atk1").Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_style(style?: string): void
    set_style_class_name(style_class_list?: string): void
    set_style_pseudo_class(pseudo_class_list?: string): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    vfunc_get_focus_chain(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    vfunc_navigate_focus(from: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    find_property(property_name: string): GObject.ParamSpec<unknown>
    get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    set_final_state(property_name: string, value: any): void
    vfunc_find_property(property_name: string): GObject.ParamSpec<unknown>
    vfunc_get_actor(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown]
    vfunc_set_final_state(property_name: string, value: any): void
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: import("@gi-types/json1").Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    backgroundColor: Clutter.Color
    readonly background_color_set: boolean
    readonly backgroundColorSet: boolean
    child_transform: import("@gi-types/graphene1").Matrix
    childTransform: import("@gi-types/graphene1").Matrix
    readonly child_transform_set: boolean
    readonly childTransformSet: boolean
    clip_rect: import("@gi-types/graphene1").Rect
    clipRect: import("@gi-types/graphene1").Rect
    clip_to_allocation: boolean
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.ContentPrototype
    readonly content_box: Clutter.ActorBox
    readonly contentBox: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    contentGravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly firstChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    fixed_position_set: boolean
    fixedPositionSet: boolean
    fixed_x: number
    fixedX: number
    fixed_y: number
    fixedY: number
    readonly has_clip: boolean
    readonly hasClip: boolean
    readonly has_pointer: boolean
    readonly hasPointer: boolean
    height: number
    readonly last_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    readonly lastChild: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    layout_manager: Clutter.BoxLayout
    layoutManager: Clutter.BoxLayout
    magnification_filter: Clutter.ScalingFilter
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    marginBottom: number
    margin_left: number
    marginLeft: number
    margin_right: number
    marginRight: number
    margin_top: number
    marginTop: number
    min_height: number
    minHeight: number
    min_height_set: boolean
    minHeightSet: boolean
    min_width: number
    minWidth: number
    min_width_set: boolean
    minWidthSet: boolean
    minification_filter: Clutter.ScalingFilter
    minificationFilter: Clutter.ScalingFilter
    name: string
    natural_height: number
    naturalHeight: number
    natural_height_set: boolean
    naturalHeightSet: boolean
    natural_width: number
    naturalWidth: number
    natural_width_set: boolean
    naturalWidthSet: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: import("@gi-types/graphene1").Point
    pivotPoint: import("@gi-types/graphene1").Point
    pivot_point_z: number
    pivotPointZ: number
    position: import("@gi-types/graphene1").Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    requestMode: Clutter.RequestMode
    rotation_angle_x: number
    rotationAngleX: number
    rotation_angle_y: number
    rotationAngleY: number
    rotation_angle_z: number
    rotationAngleZ: number
    scale_x: number
    scaleX: number
    scale_y: number
    scaleY: number
    scale_z: number
    scaleZ: number
    show_on_set_parent: boolean
    showOnSetParent: boolean
    size: import("@gi-types/graphene1").Size
    text_direction: Clutter.TextDirection
    textDirection: Clutter.TextDirection
    transform: import("@gi-types/graphene1").Matrix
    readonly transform_set: boolean
    readonly transformSet: boolean
    translation_x: number
    translationX: number
    translation_y: number
    translationY: number
    translation_z: number
    translationZ: number
    width: number
    x: number
    x_align: Clutter.ActorAlign
    xAlign: Clutter.ActorAlign
    x_expand: boolean
    xExpand: boolean
    y: number
    y_align: Clutter.ActorAlign
    yAlign: Clutter.ActorAlign
    y_expand: boolean
    yExpand: boolean
    z_position: number
    zPosition: number
    flags: number
    add_action(action: Clutter.Action): void
    add_action_full(name: string, phase: Clutter.EventPhase, action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    apply_transform_to_point(point: import("@gi-types/graphene1").Point3D): import("@gi-types/graphene1").Point3D
    bind_model(model: import("@gi-types/gio2").ListModel<GObject.Object>, create_child_func: Clutter.ActorCreateChildFunc<GObject.Object>): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): import("@gi-types/pango1").Context
    create_pango_layout(text?: string): import("@gi-types/pango1").Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): import("@gi-types/graphene1").Point3D[]
    get_accessible(): import("@gi-types/atk1").Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): Clutter.ActorBox
    get_background_color(): Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_child_transform(): import("@gi-types/graphene1").Matrix
    get_children(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>[]
    get_clip(): [number, number, number, number]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.ContentPrototype
    get_content_box(): Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [Clutter.ScalingFilter, Clutter.ScalingFilter]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_fixed_position(): [boolean, number, number]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_layout_manager(): Clutter.BoxLayout
    get_margin(): Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [boolean, Clutter.ActorBox]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): import("@gi-types/pango1").Context
    get_parent(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_pivot_point(): [number, number]
    get_pivot_point_z(): number
    get_position(): [number, number]
    get_preferred_height(for_width: number): [number, number]
    get_preferred_size(): [number, number, number, number]
    get_preferred_width(for_height: number): [number, number]
    get_previous_sibling(): Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [number, number]
    get_scale_z(): number
    get_size(): [number, number]
    get_stage(): Clutter.Stage<Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>>
    get_text_direction(): Clutter.TextDirection
    get_transform(): import("@gi-types/graphene1").Matrix
    get_transformed_extents(): import("@gi-types/graphene1").Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): Clutter.PaintVolume
    get_transformed_position(): [number, number]
    get_transformed_size(): [number, number]
    get_transition(name: string): Clutter.Transition
    get_translation(): [number, number, number]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    insert_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    insert_child_below(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: import("@gi-types/cairo1").RectangleInt): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, new_child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color): void
    set_child_above_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_at_index(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, index_: number): void
    set_child_below_sibling(child: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>, sibling?: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    set_child_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.ContentPrototype): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.BoxLayout): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name?: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: import("@gi-types/graphene1").Matrix): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [boolean, number, number]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
    vfunc_allocate(box: Clutter.ActorBox): void
    vfunc_apply_transform(matrix: import("@gi-types/graphene1").Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): import("@gi-types/atk1").Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [number, number]
    vfunc_get_preferred_width(for_height: number): [number, number]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor<Clutter.LayoutManager, Clutter.ContentPrototype>): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    g_type_instance: GObject.TypeInstance
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: GObject.BindingTransformFunc, transform_from?: GObject.BindingTransformFunc, notify?: import("@gi-types/glib2").DestroyNotify): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure<any, any>, transform_from: GObject.Closure<any, any>): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): any
    get_property(property_name: string): any
    get_qdata(quark: number): any
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec<unknown>): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: any): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): any
    steal_qdata(quark: number): any
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure<any, any>): void
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec<unknown>): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    vfunc_notify(pspec: GObject.ParamSpec<unknown>): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec<unknown>): void
    disconnect(id: number): void
    set(properties: {
      [key: string]: any
    }): void
    block_signal_handler(id: number): any
    unblock_signal_handler(id: number): any
    stop_emission_by_name(detailedName: string): any
  }, {}, []>
}
import * as Clutter from "@gi-types/clutter10"
import * as GObject from "@gi-types/gobject2"
import * as St from "@gi-types/st1"

