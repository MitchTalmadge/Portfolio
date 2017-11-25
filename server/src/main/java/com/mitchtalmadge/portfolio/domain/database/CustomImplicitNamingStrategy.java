package com.mitchtalmadge.portfolio.domain.database;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.ImplicitForeignKeyNameSource;
import org.hibernate.boot.model.naming.ImplicitJoinTableNameSource;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl;

import java.util.List;
import java.util.StringJoiner;

public class CustomImplicitNamingStrategy extends ImplicitNamingStrategyJpaCompliantImpl {

    @Override
    public Identifier determineForeignKeyName(ImplicitForeignKeyNameSource source) {
        List<Identifier> columnNames = source.getColumnNames();
        StringJoiner stringJoiner = new StringJoiner("_");
        for (Identifier identifier : columnNames) {
            stringJoiner.add(identifier.getCanonicalName());
        }
        return toIdentifier("FK_" + stringJoiner.toString(), source.getBuildingContext());
    }

    @Override
    public Identifier determineJoinTableName(ImplicitJoinTableNameSource source) {
        return toIdentifier(super.determineJoinTableName(source).getText().toLowerCase(), source.getBuildingContext());
    }
}
