export class Read {
    allowed?: boolean;
}

export class Create {
    allowed?: boolean;
}

export class Update {
    allowed?: boolean;
}

export class Operations {
    read?: Read;
    create?: Create;
    update?: Update;
}

export class Searchable {
    filterable?: boolean;
    facet?: boolean;
}

export class Link {
    href?: string;
    rel?: string;
}

export class Lookup {
    link?: Link[];
    object?: string;
    key?: string;
    value?: string;
}


export class Field {
    operations?: Operations;
    allowedValues?: string[];
    searchable?: Searchable;
    name?: string;
    label?: string;
    dataType?: string;
    length?: number;
    trust?: boolean;
    applyNullValues?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    required?: boolean;
    totalDigits?: number;
    fractionDigits?: number;
    readOnly?: boolean;
    system?: boolean;
    lookup?: Lookup;
    value?: string;
    orignalValue?: string;
}

export class FieldOrignal {
    [key: string]: any;
}

export class FieldModified {
    [key: string]: any;
    $orignal?: FieldOrignal;
}
